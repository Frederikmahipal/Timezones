import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./static/index.html"));
});

app.listen(process.env.PORT || 8080, () => {
    console.log("8080")
})
