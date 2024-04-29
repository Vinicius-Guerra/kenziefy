"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionControllers = void 0;
const services_1 = require("../services");
const httpStatusCode_1 = require("../utils/httpStatusCode");
class SessionControllers {
    service = new services_1.SessionServices();
    login = async (req, res) => {
        const account = await this.service.login(req.body);
        return res.status(httpStatusCode_1.status.HTTP_200_OK).json(account);
    };
}
exports.SessionControllers = SessionControllers;
;
