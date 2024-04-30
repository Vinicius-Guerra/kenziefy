import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";

import { handleErrors } from "./middlewares";
import { initRoutes } from "./routers";
import { jwtConfig } from "./configs";
import { initSwagger } from "./configs/swagger";

const app = express();

export const initApp = () => {
  app.use(cors());
  app.use(express.json());
  initRoutes(app);
  jwtConfig();
  initSwagger(app);
  app.use(handleErrors);
}

export default app;