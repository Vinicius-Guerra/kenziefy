import { Router } from "express";
import { trackController } from "../controllers";

export const trackRouter = Router();

trackRouter.get("", trackController.list);
trackRouter.get("/:trackId", trackController.retrieve);