import { Router } from "express";
import { auth, ensure, ensureAlbum, ensureBand } from "../middlewares";
import { AlbumControllers, } from "../controllers/album.controllers";
import { albumPayloadCreateSchema, trackBodyCreateSchema } from "../schemas";
import { trackController } from "../controllers/track.controllers";
import { AlbumService, albumService } from "../services";

export const albumRouter = Router();

const albumController = new AlbumControllers(albumService);

albumRouter.get("", auth.isAuthenticated, auth.isAdmin, albumController.list);

albumRouter.post(
    "",
    ensure.bodyIsValid(albumPayloadCreateSchema),
    albumController.create
  );

albumRouter.use("/:albumId/tracks", ensureAlbum.paramIdExists);

albumRouter.get("/:albumId/tracks", trackController.listByAlbum);
albumRouter.post(
  "/:albumId/tracks",
  ensure.bodyIsValid(trackBodyCreateSchema),
  trackController.create
);