import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/auth.route.js'
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
connectDB();
dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => { 
  res.json({ message: 'Server is running',success:true });
})
app.use('/api/user', userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


export default app