import { Router } from "express";
import { TrackControllers } from "../controllers/track.controllers";
import { ensure } from "../middlewares";
import { trackBodyCreateSchema } from "../schemas";


export const trackRouter = Router();
const trackController = new TrackControllers();

trackRouter.get("", trackController.list);
trackRouter.get("/:trackId", trackController.retrieve);
trackRouter.post("", ensure.bodyIsValid(trackBodyCreateSchema), trackController.create)