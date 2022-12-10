const express = require("express");
const path = require("path");

let initalPath = path.join(__dirname, "public");

let app = express();
app.use(express.static(initalPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(initalPath, "index.html"));
})

app.listen(3333, () => {
  console.log("Server start up!")
})