import { Sequelize } from "sequelize";

// const db = new Sequelize("countries","postgres","1202",{
//     host:"localhost",
//     dialect:"postgres"
// })

const db= new Sequelize(
    "postgres://countries_ja5y_user:S6eyJt9Yo8fx9hviFfqhG2d8oOXluObb@dpg-cikri7p5rnuvtgra2prg-a/countries_ja5y"
)

try {
    await db.authenticate()
    console.log("db connected");
} catch (error) {
    console.error("db connect error: ",error);
}
export default db;

