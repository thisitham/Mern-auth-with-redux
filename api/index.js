import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB')
}).catch((err) => {
    console.log(err);
})

const app = express();

app.use(express.json())

app.use(cookieParser())

app.listen(3000, () => {
    console.log('Server listning on port 3000')
})


import userRoutes from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

app.use("/api/user", userRoutes)
app.use("/api/auth", authRouter)


//middlware to error handle
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
 })