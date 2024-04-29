"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumService = exports.AlbumService = void 0;
const appError_1 = require("../errors/appError");
const database_1 = require("../database/database");
const schemas_1 = require("../schemas");
class AlbumService {
    album = database_1.prisma.album;
    list = async () => {
        const albums = await this.album.findMany();
        return schemas_1.albumSchema.array().parse(albums);
    };
    create = async (payload) => {
        const foundBand = await database_1.prisma.band.findFirst({ where: { id: payload.bandId } });
        if (foundBand) {
            throw new appError_1.NotFoundError("Band not found.");
        }
        const newAlbum = await this.album.create({ data: payload });
        return schemas_1.albumSchema.parse(newAlbum);
    };
}
exports.AlbumService = AlbumService;
exports.albumService = new AlbumService();
