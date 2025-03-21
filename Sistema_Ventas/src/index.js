import express from "express";
import cors from "cors";
//import bcrypt from "bcryptjs";
import routesApi from "./routes/index.js";
import { getConnection } from "./config/db.js";
import { EnvConfig } from "./config/dotenv.js";

const app = express();

app.use(cors());
app.use(express.json());

getConnection();

app.get("/", (req, res) => res.send("Hello code!!"))

routesApi(app);

//const passHash = await bcrypt.hash("hashed_password", 10);
//console.log(passHash)

app.listen(EnvConfig.port, () => {
        console.log(`Server Running on port ${EnvConfig.port}
    http://localhost:${EnvConfig.port}`)
})