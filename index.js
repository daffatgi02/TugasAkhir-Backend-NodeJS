import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5757;

app.listen(port, host, () => {
  console.log(`Server berjalan di http://${host}:${port}`);
});
