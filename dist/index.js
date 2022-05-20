"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const patient_1 = __importDefault(require("./routes/patient"));
const body_parser_1 = __importDefault(require("body-parser"));
const models_1 = __importDefault(require("./models"));
const cors_1 = __importDefault(require("cors"));
const authToken_1 = require("./middleware/authToken");
require("dotenv/config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*'
}));
const port = 3001;
app.use(body_parser_1.default.json());
models_1.default.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
});
app.use('/', auth_1.default);
app.use('/patient', authToken_1.authJWT, patient_1.default);
app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});
