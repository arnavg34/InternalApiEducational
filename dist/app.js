"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use((0, express_session_1.default)({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        sameSite: 'lax'
    }
}));
app.use(errorHandler_1.requireAuth);
app.get('/login/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'static/login/index.html'));
});
app.get('/signup/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'static/signup/index.html'));
});
app.get('/home/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'static/home/index.html'));
});
app.get('/update/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'static/update/index.html'));
});
app.get('/delete/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'static/delete/index.html'));
});
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'static')));
const distPath = path_1.default.resolve(__dirname.includes('dist') ? __dirname : path_1.default.join(__dirname, '..', 'dist'));
app.use('/dist', express_1.default.static(distPath));
app.use('/api/users', userRoutes_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
