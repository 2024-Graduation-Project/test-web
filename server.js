const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.post("/torch", async (req, res) => {
    const torchServeURL = "http://localhost:8080/predictions/KcELECTRA";
    const message = req.body;

    try {
        const response = await axios.post(torchServeURL, message);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

