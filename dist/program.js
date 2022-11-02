"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const startUp_1 = __importDefault(require("./startUp"));
let port = process.env.PORT || "3050";
startUp_1.default.app.use((0, express_1.json)());
startUp_1.default.app.listen(port, function () {
    console.log(`servidor executando na porta ${port}`);
});
