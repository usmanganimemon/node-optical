"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = __importDefault(require("./../services/AuthService"));
class AuthController {
    constructor() {
        this.authserivce = new AuthService_1.default();
    }
    getLocationsWithTimezones(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            return response.status(200).json(this.authserivce.get());
        });
    }
    register(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.authserivce.userRegister(request.body);
                return response.status(200).json({ message: 'Registertation is successfully', user });
            }
            catch (err) {
                return response.status(500).json({ message: err.message });
            }
        });
    }
    login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('request.body', request.body);
                const token = yield this.authserivce.login(request.body);
                if (!token) {
                    return response.status(401).json({ message: 'Credentials are invalid' });
                }
                return response.status(200).json({ message: 'Login success', token });
            }
            catch (err) {
                return response.status(500).json({ message: err.message });
            }
        });
    }
    fetchUser(request, response) {
        return response.status(200).json({ user: request.user });
    }
}
exports.default = new AuthController();
