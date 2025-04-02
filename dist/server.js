"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
app_1.default.listen(config_1.default.port, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});
app_1.default.get('/login', (req, res) => {
    res.sendFile('static/login/index.html', { root: __dirname });
});
app_1.default.get('/signup', (req, res) => {
    res.sendFile('static/signup/index.html', { root: __dirname });
});
app_1.default.get('/home', (req, res) => {
    res.sendFile('static/home/index.html', { root: __dirname });
});
