"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const authToken_1 = require("../middleware/authToken");
const router = express_1.default.Router();
router.get('/timezones', (req, res) => AuthController_1.default.getLocationsWithTimezones(req, res));
router.post('/register', (req, res) => AuthController_1.default.register(req, res));
router.post('/login', (req, res) => AuthController_1.default.login(req, res));
router.get('/user', authToken_1.authJWT, (req, res) => AuthController_1.default.fetchUser(req, res));
exports.default = router;
