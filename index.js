import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const nama=`Daffa`
const app = express();
app.use (cors());
app.use(express.json());
app.use(UserRoute);
app.listen(5757, ()=> console.log(`Server ${nama} berjalan baik `) );