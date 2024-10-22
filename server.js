import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import router from "./router/index.js";

const server = express();
const PORT = process.env.PORT || 8080;

const Ready = () => {
    console.log(`Server listening on port ${PORT}`);
};

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"));
server.use("/api", router);

server.listen(PORT, Ready);