import { Router } from "express";
import { TrackControllers } from "../controllers/track.controllers";
import { ensure } from "../middlewares";


export const trackRouter = Router();
const trackController = new TrackControllers();

trackRouter.get("", trackController.list);
trackRouter.get("/:trackId", trackController.retrieve);