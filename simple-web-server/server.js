const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World! This server is running on Node.js with Express.");
});

app.get("/info", (req, res) => {
  res.json({
    name: "Simple Web Server121369",
    version: "1.0.0",
    uptime: process.uptime(),
  });
});

app.get("/about-me", (req, res) => {
  res.json({
    name: "This is Mr. Milon's first CI/CD application349.",
    version: "1.0.0",
    uptime: process.uptime(),
  });
});

app.get("/contact", (req, res) => {
  res.json({
    name: "Village + Post: Gotia, Thana + Zilla: Sirajganj",
    version: "1.0.0",
    uptime: process.uptime(),
  });
});

app.get("/version", (req, res) => {
  res.json({
    name: "This is version API",
    version: "1.0.0",
    uptime: process.uptime(),
  });
});

app.get("/current-user", (req, res) => {
  res.json({
    name: "Mr Mizanur Rahman",
    version: "1.0.0",
    uptime: process.uptime(),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
