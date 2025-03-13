import express from "express";
import cors from "cors";
import routesApi from "./routes/index.js";
import { getConnection } from "./config/db.js";
import { EnvConfig } from "./config/dotenv.js";

const app = express();
getConnection()
app.use(cors());

app.get("/", (req, res) => res.send("Hello code!!"))

routesApi(app);


app.listen(EnvConfig.port, () => {
        console.log(`Server Running on port ${EnvConfig.port}
    http://localhost:${EnvConfig.port}`);
})