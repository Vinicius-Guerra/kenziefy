import "reflect-metadata";
import "helmet";
import "dotenv/config";
import cors from "cors";
import express from "express";
import "express-async-errors";
import {
  bandRouter,
  albumRouter,
  trackRouter,
  accountRouter,
  sessionRouter,
} from "./routers";
import { handleErrors } from "./middlewares";
import helmet from "helmet";

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use("/api/bands", bandRouter);
app.use("/api/albums", albumRouter);
app.use("/api/tracks", trackRouter);
app.use("/api/accounts", accountRouter);
app.use("/api", sessionRouter);

app.use(handleErrors);

export default app;