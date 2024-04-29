"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
const appError_1 = require("../errors/appError");
const jsonwebtoken_1 = require("jsonwebtoken");
const httpStatusCode_1 = require("../utils/httpStatusCode");
const zod_1 = require("zod");
class HandleErrorsMiddleware {
    static execute = (error, req, res, next) => {
        if (error instanceof appError_1.AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return res
                .status(httpStatusCode_1.status.HTTP_401_UNAUTHORIZED)
                .json({ message: error.message });
        }
        if (error instanceof zod_1.ZodError) {
            return res
                .status(httpStatusCode_1.status.HTTP_400_BAD_REQUEST)
                .json({ errors: error.errors });
        }
        console.error(error.message);
        return res
            .status(httpStatusCode_1.status.HTTP_500_INTERNAL_SERVER_ERROR)
            .json({ message: "Internal Server Error" });
    };
}
exports.handleErrors = HandleErrorsMiddleware.execute;
