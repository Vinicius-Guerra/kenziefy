"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApp = void 0;
require("reflect-metadata");
require("helmet");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const middlewares_1 = require("./middlewares");
const helmet_1 = __importDefault(require("helmet"));
const routers_1 = require("./routers");
const configs_1 = require("./configs");
const swagger_1 = require("./configs/swagger");
const app = (0, express_1.default)();
const initApp = () => {
    app.use((0, cors_1.default)());
    app.use((0, helmet_1.default)());
    app.use(express_1.default.json());
    (0, routers_1.initRoutes)(app);
    (0, configs_1.jwtConfig)();
    (0, swagger_1.initSwagger)(app);
    app.use(middlewares_1.handleErrors);
};
exports.initApp = initApp;
exports.default = app;
