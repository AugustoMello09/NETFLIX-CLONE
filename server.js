const express = require("express");
const path = require("path");
const port = 3333

let initalPath = path.join(__dirname, "public");

let app = express();
app.use(express.static(initalPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(initalPath, "index.html"));
})

app.listen(port, () => {
  console.log(`Server start up on ${port}!`);
})