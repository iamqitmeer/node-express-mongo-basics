// const http = require("http");

import http from "http";
import { mulOfTwoNum, sumOfTwoNum } from "./func/calculations.js";
import fs from "fs";
import path from "path";

// sumOfTwoNum(10, 4);
// mulOfTwoNum(10, 4);

// Reading File

// const fileRead = fs.readFileSync("./aboutMe.txt", "utf-8");
// console.log(fileRead);

// Creating File

// fs.writeFile("helloWorld.txt", "Hello World I am Qitmeer Razaaaaaa.", () => {
//     console.log("File Created Succesfully!")
// });

// Path

// Finding Extension Name

// console.log(path)
// let extname = path.extname("./package-lock.json")
// console.log(extname)

// Routing

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>Welcome to Home</h1>");
  }else if(req.url == "/about"){
    res.end("<h1>Welcome to About</h1>");
  }
});

const PORT = 1200;

server.listen(PORT, () => {
  console.log(`Port Now Running on ${PORT}`);
});

// console.log(http);
