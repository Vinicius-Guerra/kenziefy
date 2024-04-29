"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const appError_1 = require("../errors/appError");
const httpStatusCode_1 = require("../utils/httpStatusCode");
const configs_1 = require("../configs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthMiddleware {
    isAuthenticated = (req, res, next) => {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new appError_1.AppError("Missing bearer token", httpStatusCode_1.status.HTTP_401_UNAUTHORIZED);
        }
        const [_, token] = authorization.split(" ");
        const { secret } = (0, configs_1.jwtConfig)();
        const jwtPayload = (0, jsonwebtoken_1.verify)(token, secret);
        console.log(jwtPayload);
        res.locals = {
            ...res.locals,
            decoded: jwtPayload,
        };
        return next();
    };
    isAccountOwner = async (req, res, next) => {
        const { decoded } = res.locals;
        const { accountId } = req.params;
        if (decoded.sub !== accountId) {
            throw new appError_1.AppError("You dont have permission to perform this action", httpStatusCode_1.status.HTTP_403_FORBIDDEN);
        }
        return next();
    };
    isAdmin = async (req, res, next) => {
        const { decoded } = res.locals;
        if (decoded.role !== "ADMIN") {
            throw new appError_1.AppError("You dont have permission to perform this action", httpStatusCode_1.status.HTTP_403_FORBIDDEN);
        }
        return next();
    };
}
exports.auth = new AuthMiddleware();
