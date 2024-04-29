"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionServices = void 0;
const database_1 = require("../database/database");
const appError_1 = require("../errors/appError");
const bcryptjs_1 = require("bcryptjs");
const schemas_1 = require("../schemas");
const httpStatusCode_1 = require("../utils/httpStatusCode");
const configs_1 = require("../configs");
const jsonwebtoken_1 = require("jsonwebtoken");
class SessionServices {
    account = database_1.prisma.account;
    login = async ({ username, password, }) => {
        // VERIFY USERNAME
        const foundUser = await this.account.findFirst({
            where: { username: username },
        });
        if (!foundUser) {
            throw new appError_1.AppError("Invalid credentials.", httpStatusCode_1.status.HTTP_401_UNAUTHORIZED);
        }
        // VERIFY PASSWORD
        const passwordMatch = await (0, bcryptjs_1.compare)(password, foundUser.password);
        if (!passwordMatch) {
            throw new appError_1.AppError("Invalid credentials.", httpStatusCode_1.status.HTTP_401_UNAUTHORIZED);
        }
        const { secret, expiresIn } = (0, configs_1.jwtConfig)();
        // GENERATOR JWT
        const token = (0, jsonwebtoken_1.sign)({ favoriteColor: foundUser.favoriteColor, role: foundUser.role }, secret, {
            expiresIn: expiresIn,
            subject: foundUser.id.toString(),
        });
        return schemas_1.sessionReturnSchema.parse({ token });
    };
}
exports.SessionServices = SessionServices;
