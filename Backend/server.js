const express = require('express');
const ejs = require('ejs');
const path = require(`path`);
const bodyparser = require(`body-parser`);

const server = express();



server.use(express.static(pth.join(__dirname,`public`)))
server.use(express.json())
server.set(`view engine`, `ejs`);
server.set(`views`, path.join(__dirname, `views`));


module.exports = server;



