require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./Database/Connection");
const bodyParser = require('body-parser');
const router = require("./Routes/UserRoutes")
const router2 = require("./Routes/AdminRoutes")


const PORT = 4002;

var options = {
  origin: "http://localhost:3000",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204
};


// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(options));
app.use('/api',router)
app.use(router)
app.use('/api',router2)
app.use(router2)



app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
