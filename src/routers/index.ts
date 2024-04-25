import { bandRouter } from "./band.routers";
import { albumRouter } from "./album.routers";
import { trackRouter } from "./track.routers";
import { accountRouter } from "./account.routers";
import { sessionRouter } from "./session.routers";
import { Express } from "express";

export const initRoutes = (app: Express) => {
    app.use("/api/bands", bandRouter);
    app.use("/api/albums", albumRouter);
    app.use("/api/tracks", trackRouter);
    app.use("/api/accounts", accountRouter);
    app.use("/api", sessionRouter);
};