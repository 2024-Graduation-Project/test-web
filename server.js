const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3030;

const db = require("./db");
const conn = db.conn;

app.use(cors());
app.use(express.json());

app.post("/torch", async (req, res) => {
    const torchServeURL = "http://localhost:8080/predictions/KcELECTRA";
    const text = req.body.text;

    try {
        const response = await axios.post(torchServeURL, { text });
        console.log("----------------------------\nServer Connection Success\n----------------------------");

        const probToNum = response.data.slice(0, 4).map(Number);
        const resultLevel = probToNum.indexOf(Math.max(...probToNum));
        const filteredText = response.data[4];

        console.log(`Request Message: ${text}`);
        console.log(`Response Message: [${resultLevel}lv] ${filteredText}`);

        /* DB에 해당 문장을 넣는 코드 */

        res.json(response.data);
    } catch (error) {
        console.log("----------------------------\nServer Connection Failed\n----------------------------");
        console.log("ERROR:", error.message);

        res.status(500).json({ error: error.message});
    }
});

app.get("/test", async (req, res) => {
    console.log("----------------------------\nDB connection test\n----------------------------");

    conn.query("SELECT * FROM logTable", (err, res) => {
        if(err) {
            console.log("Error connecting DB:", err);
        } else {
            console.log("DB content:")
            console.log(res);
        }

        conn.end();
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

