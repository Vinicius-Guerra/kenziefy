"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicianController = exports.MusicianControllers = void 0;
const services_1 = require("../services");
const httpStatusCode_1 = require("../utils/httpStatusCode");
class MusicianControllers {
    service = new services_1.MusicianService();
    create = async (req, res) => {
        const payload = { ...req.body, bandId: Number(req.params.bandId) };
        const musician = await this.service.create(payload);
        return res.status(httpStatusCode_1.status.HTTP_201_CREATED).json(musician);
    };
}
exports.MusicianControllers = MusicianControllers;
;
exports.musicianController = new MusicianControllers();
