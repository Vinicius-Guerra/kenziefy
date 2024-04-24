import { Router } from "express";
import { ensure } from "../middlewares";
import { bandPayloadCreateSchema } from "../schemas";
import { bandService,  } from "../services";
import { musicianController } from "../controllers/musician.controllers";
import { BandControllers } from "../controllers";

export const bandRouter = Router();

const bandController = new BandControllers(bandService);

bandRouter.get("", bandController.list);

bandRouter.post(
  "",
  ensure.bodyIsValid(bandPayloadCreateSchema),
  bandController.create
);

// MUSICIANS
bandRouter.post("/:bandId/musicians", musicianController.create);
