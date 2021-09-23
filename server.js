'use strict';
"use strict";
const express = require('express') 
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const axios = require('axios');
app.use(express.json());
const PORT=process.env.PORT;

const {getFlower,addFlower,getData,deleteFlower,updateFlower}= require('./controller')

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOSE);

app.listen(PORT,()=>{
    console.log(`its listen to port ${PORT}`);
})

//localhost:4004/
app.get('/',(req,res)=>{
    res.send('its working fine')
})

app.get('/getFlower', getFlower);
app.post('/addFlower', addFlower);
app.get('/getData/:email', getData);
app.delete('/deleteFlower/:id', deleteFlower);
app.put('/updateFlower/:id', updateFlower);