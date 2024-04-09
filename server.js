const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

app.use(express.static(path.join(__dirname, "dist/clipart-task/browser")));

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/clipart-task/browser/index.html"));
});

const port = process.env.port || 3000;
app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`running on port: ${port}`);
});
