const gradleSettingCode = `\`\`\`java 
plugins {
    id 'java'
}

group = 'core'
version = '1.0-SNAPSHOT'

repositories {
    mavenCentral()
    maven {
        name = "papermc-repo"
        url = "https://repo.papermc.io/repository/maven-public/"
    }
    maven {
        name = "sonatype"
        url = "https://oss.sonatype.org/content/groups/public/"
    }
    maven {
        name = "jitpack"
        url = "https://jitpack.io"
    }
}

dependencies {
    compileOnly "io.papermc.paper:paper-api:1.20.1-R0.1-SNAPSHOT"
}

def targetJavaVersion = 17
java {
    def javaVersion = JavaVersion.toVersion(targetJavaVersion)
    sourceCompatibility = javaVersion
    targetCompatibility = javaVersion
    if (JavaVersion.current() < javaVersion) {
        toolchain.languageVersion = JavaLanguageVersion.of(targetJavaVersion)
    }
}

tasks.withType(JavaCompile).configureEach {
    options.encoding = 'UTF-8'

    if (targetJavaVersion >= 10 || JavaVersion.current().isJava10Compatible()) {
        options.release.set(targetJavaVersion)
    }
}

processResources {
    def props = [version: version]
    inputs.properties props
    filteringCharset 'UTF-8'
    filesMatching('paper-plugin.yml') {
        expand props
    }
}`;

const chatEventListenerCode = `\`\`\`java
public class ChatEveneListener implements Listener {
    @EventHandler
    public void onChat(PlayerChatEvent e) throws IOException {
        PredictData data = new PredictData(e.getMessage(), e.getPlayer().getName());

        int maxLevel = data.getMaxLevel(); //예측한 레벨 필드
        String originMessage = e.getMessage(); //유저가 최초로 입력한 채팅 필드

        // level 3일 경우 마스킹도 진행하기에 이벤트의 메시지 필드를 모델 백엔드에서 마스킹 된 메시지로 변경
        if (maxLevel == 3){
            doPunishment(data);
            e.setMessage(data.getMaskedSentence());
            getLogger().log(Level.INFO, "Chat log - " + originMessage + " Level - " + maxLevel);
            e.getPlayer().sendMessage(ChatColor.RED + " <!> " + ChatColor.GRAY + "\\"" + originMessage + "\\""
                    + ChatColor.WHITE + " 해당 메시지는 채팅 규정 위반으로 처벌될 수 있습니다.");
        }
        else if(maxLevel == -1){ //이상 예측치에 대해서는 별다른 처리 없이 콘솔에 로그만 Warning으로 남김
            getLogger().log(Level.WARNING , "Chat log - " + originMessage + " Level - " + maxLevel);
        }
        else{ // level 1, 2일 경우 마스킹은 진행하지 않으나, Plugin Config 에서 설정한 처벌 명령어 시행
            doPunishment(data);
            getLogger().log(Level.INFO, "Chat log - " + originMessage + " Level - " + maxLevel);
            e.getPlayer().sendMessage(ChatColor.RED + " <!> " + ChatColor.GRAY + "\\"" + originMessage + "\\""
                    + ChatColor.WHITE + " 해당 메시지는 채팅 규정 위반으로 처벌될 수 있습니다.");
        }
    }

    public static void doPunishment(PredictData data){
        //플러그인 Config 파일을 객체화
        FileConfiguration config = SwearWeb.getPlugin(SwearWeb.class).getConfig();
        
        //모델 백엔드로부터 받은 예측 결과 필드
        double[] levels = data.getLevels();
        String command;
        if (levels[1] > 0.95){
            command = config.getString("lv1-punishment-command");
            command = command.replace("$1", data.getUsername());
            Bukkit.dispatchCommand(Bukkit.getServer().getConsoleSender(), command); //command String을 게임 서버에 시행
        }
        else if (levels[2] > 0.95){
            command = config.getString("lv2-punishment-command");
            command = command.replace("$1", data.getUsername());
            Bukkit.dispatchCommand(Bukkit.getServer().getConsoleSender(), command);

        }
        else if (levels[3] > 0.95){
            command = config.getString("lv3-punishment-command");
            command = command.replace("$1", data.getUsername());
            Bukkit.dispatchCommand(Bukkit.getServer().getConsoleSender(), command);
        }
    }
}`;

const predictDataClass = `\`\`\`java public class PredictData {
    private double[] levels; //예측 후 들어오는 level 저장
    private String sentence; //예측 시 사용할 문장 필드
    private String maskedSentence; //3레벨일 경우 마스킹 된 메시지가 저장될 필드
    private String username; //채팅을 친 유저의 닉네임을 저장하는 필드

    public PredictData(String message, String username) throws IOException {
        this.sentence = message;
        this.username = username;
        String response = doRequest(message);
        String[] parts = response.substring(1, response.length() - 1).split(",");
        for (int i = 0; i < parts.length; i++){
            parts[i] = parts[i].replaceAll("\\"","");
        }
        // Extract and parse double values from the first four elements
        this.levels = new double[4];
        for (int i = 0; i < 4; i++) {
            levels[i] = Double.parseDouble(parts[i].trim());
        }

        // Extract and decode the last element
        this.maskedSentence = unescapeUnicode(parts[4]);
        this.maskedSentence = removeLeadingWhitespace(this.maskedSentence);
        // Print the extracted values
    }

    public int getMaxLevel(){
        if (levels[0] > 0.97)return 0;
        else if(levels[1] > 0.97)return 1;
        else if(levels[2] > 0.97)return 2;
        else if(levels[3] > 0.97)return 3;
        else return -1;
    }

    public double[] getLevels() {
        return levels;
    }

    public String getSentence() {
        return sentence;
    }

    public String getUsername(){
        return username;
    }

    public String getMaskedSentence() {
        return maskedSentence;
    }

    private static String doRequest(String message) throws IOException {//API 서버에 HTTP Request 전송
        URL url = new URL("http://localhost:8080/predictions/KcELECTRA");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setDoOutput(true);

        // Create JSON string manually
        String jsonInputString = "{\\"text\\": \\"" + message + "\\"}";

        try (OutputStream os = con.getOutputStream()) {
            byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        }

        StringBuilder response = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), StandardCharsets.UTF_8))) {
            String line;
            while ((line = br.readLine()) != null) {
                response.append(line);
            }
        }

        // Close connection
        con.disconnect();
        return response.toString();
    }
    public static String unescapeUnicode(String escaped) {/* 유니코드 이스케이프 코드 제거 */
        StringBuilder sb = new StringBuilder();

        int i = 0;
        while (i < escaped.length()) {
            if (escaped.charAt(i) == '\\\\' && i + 1 < escaped.length() && escaped.charAt(i + 1) == 'u') {
                StringBuilder unicode = new StringBuilder();
                for (int j = i + 2; j < i + 6; j++) {
                    unicode.append(escaped.charAt(j));
                }
                sb.append((char) Integer.parseInt(unicode.toString(), 16));
                i += 6;
            } else {
                sb.append(escaped.charAt(i));
                i++;
            }
        }

        return sb.toString();
    }

    public static String removeLeadingWhitespace(String str) {
        int index = 0;
        while (index < str.length() && Character.isWhitespace(str.charAt(index))) {
            index++;
        }
        return str.substring(index);
    }
}`;

const pluginMainClass = `\`\`\`java public final class SwearWeb extends JavaPlugin {
    @Override
    public void onEnable() {
        this.saveDefaultConfig();
        Bukkit.getLogger().log(Level.INFO, "SwearMonitor is Enabled");
        Bukkit.getPluginManager().registerEvents(new ChatEveneListener(), this);
        //Event Listener를 게임 서버에 등록
    }

    @Override
    public void onDisable() {
        Bukkit.getLogger().log(Level.INFO, "SwearMonitor is Disabled");
    }
}`;

export default {
    gradleSettingCode,
    chatEventListenerCode,
    predictDataClass,
    pluginMainClass
}