"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemRoutes_1 = __importDefault(require("./routes/itemRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'static')));
const distPath = path_1.default.resolve(__dirname.includes('dist') ? __dirname : path_1.default.join(__dirname, '..', 'dist'));
console.log('DIST FOLDER:', distPath);
app.use('/dist', express_1.default.static(distPath));
// Routes
app.use('/api/items', itemRoutes_1.default);
// Global error handler (should be after routes)
app.use(errorHandler_1.errorHandler);
exports.default = app;
