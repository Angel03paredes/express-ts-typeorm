import "reflect-metadata"
import express, { json } from 'express';
import curstomerRoutes from "./routes/curstomer.routes";
import {connection} from './db'


const app = express();

app.set("port",process.env.PORT || 3000);
connection()

app.use(json())

app.use("/customer",curstomerRoutes)


app.listen(app.get("port"));


