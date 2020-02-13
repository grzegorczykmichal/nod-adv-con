const crypto = require("crypto");
const http = require("http");

const start = Date.now();

function doRequest() {
  http
    .request("http://google.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", Date.now() - start);
  });
}
