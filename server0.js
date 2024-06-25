const express = require("express");
const app = express();
app.use(express.static(__dirname));

const port = process.env.PORT || 3009; 

// Start the server and log its address
const server = app.listen(port, () => {
  console.log(
    "Server==\x1b[0m\x1b[32msuccess\x1b[0m\x1b[37m__________\x1b[0m\x1b[33mserver0.js\x1b[0m\x1b[37m running \x1b[0m\x1b[37mHomepage(ECE)\x1b[0m\x1b[37m__________\x1b[0mon \x1b[31mport \x1b[0m\x1b[31m3009\x1b[0m");
});
