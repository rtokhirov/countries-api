import express from "express";
import countryRouter from "./routes/country.routes.js";
import { countriesStart } from "./test.js";

const app=express()


app.use(express.json())

app.use('/api/',countryRouter)

const port =process.env.PORT||8080
app.listen(port,()=>console.log('server started'))
// countriesStart()
