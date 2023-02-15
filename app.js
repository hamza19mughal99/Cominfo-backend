import 'dotenv/config';
import express from "express";
import "./db/Conn.js";
import bodyParser from "body-parser";
import candidateRoute from "./routes/candidateRoute.js";
import cors from "cors";
import handleError from './middlewares/handleError.js';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.json());
app.use(cors());

app.use("/iframe", candidateRoute);
app.use(handleError)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend is running in ${PORT}`);
})