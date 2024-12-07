// const http = require("http");

import http from "http";
import { mulOfTwoNum, sumOfTwoNum } from "./func/calculations.js";
import fs from "fs";

const server = http.createServer();

const PORT = 1200;

// sumOfTwoNum(10, 4);
// mulOfTwoNum(10, 4);

const fileRead = fs.readFileSync("./aboutMe.txt","utf-8");
console.log(fileRead)

server.listen(PORT, () => {
//   console.log(`Port Now Running on ${PORT}`);
});

// console.log(http);
