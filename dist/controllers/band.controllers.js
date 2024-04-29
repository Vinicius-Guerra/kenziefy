"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandControllers = void 0;
const httpStatusCode_1 = require("../utils/httpStatusCode");
const tsyringe_1 = require("tsyringe");
let BandControllers = class BandControllers {
    service;
    constructor(service) {
        this.service = service;
    }
    create = async (req, res) => {
        const band = await this.service.create(req.body);
        return res.status(httpStatusCode_1.status.HTTP_201_CREATED).json(band);
    };
    list = async (req, res) => {
        const bands = await this.service.list();
        return res.status(httpStatusCode_1.status.HTTP_200_OK).json(bands);
    };
};
exports.BandControllers = BandControllers;
exports.BandControllers = BandControllers = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("BandService")),
    __metadata("design:paramtypes", [Object])
], BandControllers);
;
