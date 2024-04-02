const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.post("/torch", async (req, res) => {
    const torchServeURL = "http://localhost:8080/predictions/KcELECTRA";
    const text = req.body.text;
    console.log(`request message: ${text}`);

    try {
        const response = await axios.post(torchServeURL, { text });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

