import { Router } from "express";
import { ensure } from "../middlewares";
import { bandPayloadCreateSchema } from "../schemas";
import { BandServices, bandService,  } from "../services";
import { musicianController } from "../controllers/musician.controllers";
import { BandControllers } from "../controllers";
import { container } from "tsyringe";

export const bandRouter = Router();
container.registerSingleton("BandServices", BandServices);
const bandController = container.resolve(BandControllers);

bandRouter.get("", bandController.list);

bandRouter.post(
  "",
  ensure.bodyIsValid(bandPayloadCreateSchema),
  bandController.create
);

// MUSICIANS
bandRouter.post("/:bandId/musicians", musicianController.create);
// bandRouter.get("/:bandId/musicians");
