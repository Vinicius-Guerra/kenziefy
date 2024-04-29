"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
const band_routers_1 = require("./band.routers");
const album_routers_1 = require("./album.routers");
const track_routers_1 = require("./track.routers");
const account_routers_1 = require("./account.routers");
const session_routers_1 = require("./session.routers");
const initRoutes = (app) => {
    app.use("/api/bands", band_routers_1.bandRouter);
    app.use("/api/albums", album_routers_1.albumRouter);
    app.use("/api/tracks", track_routers_1.trackRouter);
    app.use("/api/accounts", account_routers_1.accountRouter);
    app.use("/api", session_routers_1.sessionRouter);
};
exports.initRoutes = initRoutes;
