import express from "express";
import countryRouter from "./routes/country.routes.js";
import { countriesStart } from "./test.js";

const app=express()


app.use(express.json())

app.use('/api/',countryRouter)

app.listen(8080,()=>console.log('server started'))
countriesStart()