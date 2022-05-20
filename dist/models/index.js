"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize('practice', 'root', 'root@123', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
