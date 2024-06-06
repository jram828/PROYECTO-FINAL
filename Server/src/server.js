//import https from 'https';
//import fs from 'fs';
import express from "express";
import router from "./routes/index.js";
import morgan from "morgan";
import cors from "cors";

const server = express();
// const options = {
//     key: fs.readFileSync('./localhost-key.pem'), // Reemplaza con la ruta de tu llave generada
//     cert: fs.readFileSync('./localhost.pem') // Reemplaza con la ruta de tu certificado generado
//   }

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

export {
  server,
  // options,
  // https
};
