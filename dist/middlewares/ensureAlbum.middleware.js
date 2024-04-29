"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAlbum = exports.EnsureAlbumMiddleware = void 0;
const database_1 = require("../database/database");
const httpStatusCode_1 = require("../utils/httpStatusCode");
class EnsureAlbumMiddleware {
    paramIdExists = async (req, res, next) => {
        const foundAlbum = await database_1.prisma.album.findFirst({
            where: {
                id: Number(req.params.albumId),
            },
        });
        if (!foundAlbum) {
            return res
                .status(httpStatusCode_1.status.HTTP_404_NOT_FOUND)
                .json({ message: "Album not found" });
        }
        res.locals = { foundAlbum };
        return next();
    };
}
exports.EnsureAlbumMiddleware = EnsureAlbumMiddleware;
exports.ensureAlbum = new EnsureAlbumMiddleware();
