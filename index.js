import express  from "express";
import home from "./routes/home.js"

const app =  express();
app.use(express.json());
app.use(home);
const port =   5009;
app.listen(port, ()=>console.log("App is running on port "+port));