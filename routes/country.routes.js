import express from 'express'
import {  getAll,getCode,getFullName,getName, getRegion, update  } from '../controllers/country.controller.js'

const countryRouter= express.Router()

countryRouter.get('/',getAll)
countryRouter.get('/name/:name',getName)
countryRouter.get('/fullname/:name',getFullName)
countryRouter.get('/region/:region',getRegion)
countryRouter.get('/code/:code',getCode)
countryRouter.patch('/',update)

export default countryRouter