import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import router from "./router/index.js";
import not_found_handler from "./middlewarses/not_found_handler.js";
import errorServerHandler from "./middlewarses/internal_error_handler.js";
import badRequestHandler from "./middlewarses/bad_request.js";


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
server.use(not_found_handler);
server.use(errorServerHandler);
server.use(badRequestHandler);


server.listen(PORT, Ready);