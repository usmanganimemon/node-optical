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
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthService {
    get() {
        const locations = [
            {
                location: 'Germany',
                timezoneName: 'Central European Time',
                timezoneAbbr: 'CET',
                utcOffset: 1
            },
            {
                location: 'China',
                timezoneName: 'China Standard Time',
                timezoneAbbr: 'CST',
                utcOffset: 8
            },
            {
                location: 'Argentina',
                timezoneName: 'Argentina Time',
                timezoneAbbr: 'ART',
                utcOffset: -3
            },
            {
                location: 'Japan',
                timezoneName: 'Japan Standard Time',
                timezoneAbbr: 'JST',
                utcOffset: 9
            }
        ];
        return locations;
    }
    userRegister(data) {
        return __awaiter(this, void 0, void 0, function* () {
            data.password = bcrypt_1.default.hashSync(data.password, 10);
            const user = yield user_1.default.create(data);
            return user;
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({ where: { email: data.email }, raw: true });
            if (user && bcrypt_1.default.compareSync(data.password, user.password)) {
                const secret = process.env.JWT_SECRET_KEY;
                const token = jsonwebtoken_1.default.sign(user, secret);
                return token;
            }
            else {
                return false;
            }
        });
    }
    fetchUser(token) {
        const secret = process.env.JWT_SECRET_KEY;
        const decode = jsonwebtoken_1.default.verify(token, secret);
        console.log('decode', decode);
        return decode;
    }
}
exports.default = AuthService;
