require("dotenv").config();
const express = require("express");
const { connection } = require("./src/configs/db");
const app = express();
const PORT = process.env.PORT || 8000
const cors = require('cors')

const authController = require("./src/controllers/auth.controller");
const userController = require("./src/controllers/user.controller");


app.use(express.json());
app.use(cors())
app.use("/auth", authController);
app.use("/users", userController);

app.listen(PORT, async () => {
    try{
        await connection();
        console.log(`server running on ${PORT}`)
    }
    catch(err) {
        console.log(err.message);
    }
    
})
