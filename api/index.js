import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB')
}).catch((err) => {
    console.log(err);
})

const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log('Server listning on port 3000')
})


import userRoutes from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

app.use("/api/user", userRoutes)
app.use("/api/auth", authRouter)
