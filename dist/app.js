"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express, { Request, Response } from 'express';
const express_1 = __importDefault(require("express"));
//const app = express();
const app = (0, express_1.default)();
const port = 3000;
const connectDB = require("../config/db.js");
//connect to db
connectDB();
// Middleware
app.use(express_1.default.json());
// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
