"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.AppError = void 0;
const httpStatusCode_1 = require("../utils/httpStatusCode");
class AppError extends Error {
    message;
    statusCode;
    constructor(message, statusCode = 400) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
class NotFoundError extends AppError {
    message;
    statusCode;
    constructor(message, statusCode = httpStatusCode_1.status.HTTP_404_NOT_FOUND) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.NotFoundError = NotFoundError;
