"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackControllers = void 0;
const services_1 = require("../services");
const httpStatusCode_1 = require("../utils/httpStatusCode");
class TrackControllers {
    service = new services_1.TrackService();
    list = async (req, res) => {
        const tracks = this.service.list();
        return res.status(httpStatusCode_1.status.HTTP_200_OK).json(tracks);
    };
    listByAlbum = async (req, res) => {
        const albumId = Number(req.params.id);
        const tracks = await this.service.listByAlbumId(albumId);
        return res.status(httpStatusCode_1.status.HTTP_200_OK).json(tracks);
    };
    create = async (req, res) => {
        const payload = { ...req.body, albumId: Number(req.params.id) };
        const track = await this.service.create(payload);
        return res.status(httpStatusCode_1.status.HTTP_201_CREATED).json(track);
    };
    retrieve = async (req, res) => {
        const trackId = Number(req.params.trackId);
        const tracks = await this.service.retrieve(trackId);
        return res.status(httpStatusCode_1.status.HTTP_200_OK).json(tracks);
    };
}
exports.TrackControllers = TrackControllers;
