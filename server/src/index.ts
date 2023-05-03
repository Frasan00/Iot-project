import express from "express";
import { Express } from "express";
import cors from "cors";
import { entitiesDB } from "./entities";
// routes import
import userRoute from "./routes/userRoute";
// servicies import
import { PostgresDataSource } from "./database/PostgresDataSource";
// mqtt imports
import connectMqtt from "./mqtt/connectionMqtt";
import { ServerMqtt } from "./mqtt/ServerMqtt";


// configs of servicies
const PORT = process.env.PORT || 5000;
const app: Express = express();
const config = require("dotenv").config();

// database initialization
const pg = new PostgresDataSource({
    host: process.env.PG_HOST || "",
    port: 5432,
    username: process.env.PG_USER || "",
    password: process.env.PG_PASSWORD || "",
    database: process.env.PG_DATABASE || "",
    entities: entitiesDB
});
pg.initialize()
    .then(() => console.log("Logged to DB"))
    .catch((err) => console.error(err));

// Mqtt server initialization
const ServerConfig = new ServerMqtt({
    clientMqtt: connectMqtt(),
    userList: []
}).start();
export const serverMqtt = ServerConfig;


// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/user", userRoute);

app.listen(PORT, () => console.log("Listening on port "+PORT));
