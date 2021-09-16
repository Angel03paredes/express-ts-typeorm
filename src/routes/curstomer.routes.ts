import {Router} from "express";
import {getAll,addCustomer,deleteCurstomer,updateCustomer,getCustomer} from './../controllers/customer.controller'

const app = Router();

app.get("/",getAll);

app.post("/",addCustomer);

app.delete("/:id",deleteCurstomer);

app.put("/:id",updateCustomer);

app.get("/:id",getCustomer);


export default app;