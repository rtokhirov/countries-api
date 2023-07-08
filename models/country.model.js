import { DataTypes } from "sequelize";
import db from "../db/dbConnect.js";

const Country= db.define('country',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    native_name:{
        type:DataTypes.STRING,
    },
    population:{
        type:DataTypes.INTEGER,
    },
    area:{
        type:DataTypes.DOUBLE,
    },
    flag:{
        type:DataTypes.STRING,
    },
    capital:{
        type:DataTypes.STRING,
    },
    region:{
        type:DataTypes.STRING,
    },
    subregion:{
        type:DataTypes.STRING,
    },
    borders:{
        type:DataTypes.JSON,
    },
    tld:{
        type:DataTypes.JSON,
    },
    currencies:{
        type:DataTypes.JSON,
    },
    languages:{
        type:DataTypes.JSON,
    },    
    codes:{
        type:DataTypes.JSON,
    },    
})

//name native_name population capital region subregion borders tld currency languages


Country.sync()


export default Country