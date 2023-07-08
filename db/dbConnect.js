import { Sequelize } from "sequelize";

const db = new Sequelize("countries","postgres","1202",{
    host:"localhost",
    dialect:"postgres"
})

try {
    await db.authenticate()
    console.log("db connected");
} catch (error) {
    console.error("db connect error: ",error);
}
export default db;

