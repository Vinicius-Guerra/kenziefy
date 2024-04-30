import { Router } from "express";
import { musicianController } from "../controllers/musician.controllers";

import { ensure } from "../middlewares";
import { bandPayloadCreateSchema } from "../schemas";
import { bandService, BandInMemoryService, BandServices } from "../services";
import { container } from "tsyringe";
import { BandControllers } from "../controllers/band.controllers";

export const bandRouter = Router();
container.registerSingleton("BandService", BandServices);

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