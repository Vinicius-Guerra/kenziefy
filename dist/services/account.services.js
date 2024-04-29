"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountService = exports.AccountService = void 0;
const bcryptjs_1 = require("bcryptjs");
const database_1 = require("../database/database");
const schemas_1 = require("../schemas");
const tsyringe_1 = require("tsyringe");
const appError_1 = require("../errors/appError");
const httpStatusCode_1 = require("../utils/httpStatusCode");
let AccountService = class AccountService {
    account = database_1.prisma.account;
    isUsernameUnique = async (username) => {
        const foundUser = await this.account.findFirst({ where: { username } });
        return Boolean(foundUser);
    };
    list = async () => {
        const accounts = await this.account.findMany();
        return schemas_1.accountReturnSchema.array().parse(accounts);
    };
    create = async (payload) => {
        const foundAccount = await this.isUsernameUnique(payload.username);
        if (foundAccount) {
            throw new appError_1.AppError("Username already exists.", httpStatusCode_1.status.HTTP_409_CONFLICT);
        }
        payload.password = await (0, bcryptjs_1.hash)(payload.password, 10);
        const newAccount = await this.account.create({ data: payload });
        return schemas_1.accountReturnSchema.parse(newAccount);
    };
    retrieve = async (accountId) => {
        const account = await this.account.findFirst({ where: { id: accountId } });
        return schemas_1.accountReturnSchema.parse(account);
    };
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, tsyringe_1.injectable)()
], AccountService);
;
exports.accountService = new AccountService();
