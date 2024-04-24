import { Router } from "express";
import { auth, ensure, ensureAlbum, ensureBand } from "../middlewares";
import { albumController } from "../controllers/album.controllers";
import { albumPayloadCreateSchema, trackBodyCreateSchema } from "../schemas";
import { trackController } from "../controllers/track.controllers";

export const albumRouter = Router();

albumRouter.get("", auth.isAuthenticated, auth.isAdmin, albumController.list);

albumRouter.post(
    "",
    ensure.bodyIsValid(albumPayloadCreateSchema),
    ensureBand.bodyExists,
    albumController.create
);

albumRouter.use("/:albumId/tracks", ensureAlbum.paramIdExists);

albumRouter.get("/:albumId/tracks", trackController.listByAlbum);

albumRouter.post(
    "/:albumId/tracks",
    ensure.bodyIsValid(trackBodyCreateSchema),
    trackController.create
);