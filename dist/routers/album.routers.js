"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const album_controllers_1 = require("../controllers/album.controllers");
const schemas_1 = require("../schemas");
const track_controllers_1 = require("../controllers/track.controllers");
const services_1 = require("../services");
exports.albumRouter = (0, express_1.Router)();
const trackController = new track_controllers_1.TrackControllers();
const albumController = new album_controllers_1.AlbumControllers(services_1.albumService);
exports.albumRouter.get("", middlewares_1.auth.isAuthenticated, middlewares_1.auth.isAdmin, albumController.list);
exports.albumRouter.post("", middlewares_1.ensure.bodyIsValid(schemas_1.albumPayloadCreateSchema), albumController.create);
exports.albumRouter.use("/:albumId/tracks", middlewares_1.ensureAlbum.paramIdExists);
exports.albumRouter.get("/:albumId/tracks", trackController.listByAlbum);
exports.albumRouter.post("/:albumId/tracks", middlewares_1.ensure.bodyIsValid(schemas_1.trackBodyCreateSchema), trackController.create);