import db from "../db/dbConnect.js";
import Country from "../models/country.model.js";
import { Op } from "sequelize"; 

export const getAll= async(req,res)=>{
    try {
        const country= await Country.findAll({
            attributes: { exclude: ['createdAt','updatedAt'] }
        })
        res.send(country)
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error.message);
    }
}

export const getName= async(req,res)=>{
    try {
        let countryName= req.params.name; 
        const country= await Country.findAll({
            where: db.where(
                db.fn('lower', db.col('name')), {
                    [Op.iLike]:`%${countryName}%`
                })
        })  
        // console.log({params:req.params});
        res.send(country)
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error.message);
    }
}

export const getFullName= async(req,res)=>{
    try {
        let countryName= req.params.name; 
        const country= await Country.findAll({
            where: db.where(
                db.fn('lower', db.col('name')),`${countryName}`)
        })  
        // console.log({params:req.params});
        res.send(country)
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error.message);
    }
}

export const getRegion= async(req,res)=>{
    try {
        let  filterText= req.params.region;
        const country= await Country.findAll({
            where: db.where(
                db.fn('lower', db.col('region')),`${filterText}`)
        }) 
        console.log({params:req.params});
        res.send(country)
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error.message);
    }
}

export const getCode= async(req,res)=>{
    try {
        let  filterText= req.params.code;
        filterText=filterText.toUpperCase()
        const country = await Country.findOne({
          where: {
            [Op.or]: [
              { codes: { cca2: filterText } },
              { codes: { ccn3: filterText } },
              { codes: { cca3: filterText } },
              { codes: { cioc: filterText } },
            ],
          },
        });  
        console.log({params:req.params});
        res.send(country)
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error.message);
    }
}

export const update= async(req,res)=>{
    try {
        const data= req.body
        const id = await data.id
        const country= await Country.update(data,{
            where:{
                id:id
            },returning:true
        })

        res.status(201).send(country[1][0])
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error.message);
    }
    
}
