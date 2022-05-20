"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authJWT = (request, response, next) => {
    try {
        const authHeader = request.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            const secret = process.env.JWT_SECRET_KEY;
            const decode = jsonwebtoken_1.default.verify(token, secret);
            if (decode) {
                request.user = decode;
                next();
            }
            else {
                throw new Error('Unauthorized');
            }
        }
        else {
            throw new Error('Unauthorized');
        }
    }
    catch (err) {
        return response.sendStatus(401);
    }
};
exports.authJWT = authJWT;
