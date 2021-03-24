import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandling from "./middlewares/errorModdleware.js";
import UserRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("API is running..."));

app.use("/api/users", UserRoutes);

app.use(errorHandling);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
