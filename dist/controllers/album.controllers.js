"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumControllers = void 0;
const httpStatusCode_1 = require("../utils/httpStatusCode");
class AlbumControllers {
    service;
    constructor(service) {
        this.service = service;
        this.service = service;
    }
    create = async (req, res) => {
        const album = await this.service.create(req.body);
        return res.status(httpStatusCode_1.status.HTTP_201_CREATED).json(album);
    };
    list = async (req, res) => {
        const albums = await this.service.list();
        return res.status(httpStatusCode_1.status.HTTP_200_OK).json(albums);
    };
}
exports.AlbumControllers = AlbumControllers;
;
