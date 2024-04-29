"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const jwtConfig = () => {
    const secret = process.env.JWT_SECRET_KEY;
    const expiresIn = process.env.EXPIRESS_IN;
    if (!secret) {
        throw new Error("Missing JWT enviroment variable `JWT_SECRET_KEY`");
    }
    return { secret, expiresIn };
};
exports.jwtConfig = jwtConfig;