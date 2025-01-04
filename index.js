const express = require("express");
const cors = require("cors");
const app = express();
const corsOption = {
    origin: ["http://localhost:5173/vite-booking"],
};

app.use(cors(corsOption));
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});