"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandRouter = void 0;
const express_1 = require("express");
const musician_controllers_1 = require("../controllers/musician.controllers");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
const services_1 = require("../services");
const tsyringe_1 = require("tsyringe");
const band_controllers_1 = require("../controllers/band.controllers");
exports.bandRouter = (0, express_1.Router)();
tsyringe_1.container.registerSingleton("BandService", services_1.BandServices);
const bandController = tsyringe_1.container.resolve(band_controllers_1.BandControllers);
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
exports.bandRouter.get("", bandController.list);
exports.bandRouter.post("", middlewares_1.ensure.bodyIsValid(schemas_1.bandPayloadCreateSchema), bandController.create);
// MUSICIANS
exports.bandRouter.post("/:bandId/musicians", musician_controllers_1.musicianController.create);
// bandRouter.get("/:bandId/musicians");
