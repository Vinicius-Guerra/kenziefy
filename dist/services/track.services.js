"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackService = void 0;
const database_1 = require("../database/database");
const schemas_1 = require("../schemas");
class TrackService {
    track = database_1.prisma.track;
    list = async () => {
        const tracks = await this.track.findMany();
        return schemas_1.trackSchema.array().parse(tracks);
    };
    create = async (payload) => {
        const newTrack = await this.track.create({ data: payload });
        return schemas_1.trackSchema.parse(newTrack);
    };
    listByAlbumId = async (albumId) => {
        const albumTracks = await this.track.findMany({
            where: { albumId: albumId },
        });
        return schemas_1.trackSchema.array().parse(albumTracks);
    };
    retrieve = async (trackId) => {
        const track = await this.track.findUnique({
            where: { id: trackId },
            include: { album: true },
        });
        return schemas_1.trackRetrieveSchema.parse(track);
    };
}
exports.TrackService = TrackService;
