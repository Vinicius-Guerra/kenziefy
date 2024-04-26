import "reflect-metadata";
import "helmet";
import "dotenv/config";
import cors from "cors";
import express from "express";
import "express-async-errors";
import { handleErrors } from "./middlewares";
import helmet from "helmet";
import { initRoutes } from "./routers";
import { jwtConfig } from "./configs";
import { initSwagger } from "./configs/swagger";

const app = express();

export const initApp = () => {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  initRoutes(app);
  jwtConfig();
  initSwagger(app);
  app.use(handleErrors);
}





export default app;