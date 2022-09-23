import express from 'express';
import userRouter from '#Routes/user.routes.js';

const expresssApp = express();

// Middlewares
expresssApp.use(express.json());

// Routes
expresssApp.use('/user', userRouter);

export default expresssApp