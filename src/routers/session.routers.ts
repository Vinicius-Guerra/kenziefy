import { Router } from "express";
import { SessionControllers } from "../controllers/session.controllers";
import { ensure } from "../middlewares";
import { sessionBodyCreateSchema } from "../schemas";

export const sessionRouter = Router();

const sessionController = new SessionControllers();

sessionRouter.post(
  "/login",
  ensure.bodyIsValid(sessionBodyCreateSchema),
  sessionController.login
);

// accountRouter.get("", accountController.list);
