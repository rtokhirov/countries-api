import { data } from "./db/data.js"
import Country from "./models/country.model.js"

const addCountry = async(data)=>{
    try {
        await Country.create(data) 
    } catch (error) {
        throw error
    }
}

export const countriesStart=()=>{
    const arr=[]
    try {
        data.forEach((country,index) => {
            let new_name;
            let new_native
            let new_borders
            let capital
            let currencies=[]
            let languages=[]
            let codes={}
            const{name, area, population,region, subregion, tld,flags}=country
            if (name) {
                new_name=name.common
                new_native=''
                if(name.nativeName){
                    new_native=Object.values(name.nativeName)[0].official?Object.values(name.nativeName)[0].official:undefined
                }else{
                    new_native=undefined
                }
            } else {
                console.log(name);
            }
            if(country.borders){
                new_borders=country.borders
            }else{
                new_borders=undefined
            }
            if (country.capital) {
                capital=country.capital[0]
            } else {
                capital=undefined
            }
            if(country.currencies){
                let arr1=[]
                Object.keys(country.currencies).forEach(item=>{
                    arr1.push(item)
                })
                Object.values(country.currencies).forEach((item,index)=>{
                    currencies.push({
                        name:item.name,
                        symbol:item.symbol,
                        short_name:arr1[index]
                    })
                })
                
            }else{
                currencies=undefined
            }
            if(country.languages){
                Object.values(country.languages).forEach(lang=>{
                    languages.push(lang)
                })
            }else{
                languages=undefined
            }
            if(country.cca2){
                codes.cca2=country.cca2
            }
            if(country.ccn3){
                codes.ccn3=country.ccn3
            }
            if(country.cca3){
                codes.cca3=country.cca3
            }
            if(country.cioc){
                codes.cioc=country.cioc
            }
            addCountry({
                name:new_name,
                native_name:new_native,
                capital,
                area,
                population,
                region, 
                subregion, 
                currencies,
                flag:flags.svg,
                languages,
                borders:new_borders,
                tld:tld,
                codes
            })
            
        });

    } catch (error) {
        console.log(error);
    }
   
}


