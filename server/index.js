import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandling from "./middlewares/errorModdleware.js";
import UserRoutes from "./routes/userRoutes.js";
import path from 'path';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", UserRoutes);

const __dirname = path.resolve()

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, '/client/build')))

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
	})
} else {
	app.get("/", (req, res) => res.send("API is running..."));
}

app.use(errorHandling);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, '0.0.0.0' , console.log(`Server is running on PORT ${PORT}`));
