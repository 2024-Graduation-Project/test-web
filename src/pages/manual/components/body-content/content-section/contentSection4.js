import Highlight from "react-highlight";
import sect4Text from "../contentSection4Text";
import Markdown from "../../../../../Markdown";

function ContentSection4() {

    return (
        <div className='content-section'>
            <p className='title1'>Minecraft</p>
            <p className='text'>
                HTTP 요청/응답을 지원하는 모든 언어는 API를 사용할 수 있기 때문에,
                다양한 환경에서 다양한 용도로 활용할 수 있다.
                마인크래프트는 Java언어를 기반으로 만들어졌기 때문에 아래와 같이 활용할 수 있다.
            </p>
            <p className='text'>
                Gradle Setting :
            </p>
            <div className='long-code-section'>
                {/*<pre><code className='code-font'>{ sect4Text.gradleSettingCode }</code></pre>*/}
                <Markdown text={sect4Text.gradleSettingCode}/>
            </div>
            <p className='text'>
                ChatEventListener 클래스 :
            </p>
            <div className='long-code-section'>
                {/*<pre><code className='code-font'>{ sect4Text.chatEventListenerCode }</code></pre>*/}
                <Markdown text={sect4Text.chatEventListenerCode}/>
            </div>
            <p className='text'>
                PredictData 클래스 :
            </p>
            <div className='long-code-section'>
                {/*<pre><code className='code-font'>{ sect4Text.predictDataClass }</code></pre>*/}
                <Markdown text={sect4Text.predictDataClass}/>
            </div>
            <p className='text'>
                PluginMain 클래스 :
            </p>
            <div className='long-code-section'>
                {/*<pre><code className='code-font'>{ sect4Text.pluginMainClass }</code></pre>*/}
                <Markdown text={sect4Text.pluginMainClass}/>
            </div>
        </div>
    );
}

export default ContentSection4;