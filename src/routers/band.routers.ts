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
/**
 * @openapi
 * /api/bands:
 *  get:
 *    tags:
 *      - Bandas
 *    summary: Listar bandas
 *    description: Retorna todas as bandas.
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Band'
 *  post:
 *    tags:
 *      - Bandas
 *    summary: Criar uma banda
 *    description: Cria e retorna a banda.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Band'
 *    responses:
 *      201:
 *        description: Created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Band'
 *      400:
 *        description: Bad Request
 */
bandRouter.get("", bandController.list);
bandRouter.post(
  "",
  ensure.bodyIsValid(bandPayloadCreateSchema),
  bandController.create
);

// MUSICIANS
bandRouter.post("/:bandId/musicians", musicianController.create);
// bandRouter.get("/:bandId/musicians");