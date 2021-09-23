'use strict';
const  axios = require('axios');
const {flowerModel} = require('./Model')

const getFlower=(req,res)=>{
    let url='https://flowers-api-13.herokuapp.com/getFlowers'
    axios.get(url).then(item=>{
        console.log(item.data.flowerslist);
        let flowerData = item.data.flowerslist;
         res.json(flowerData)
    })
}

const addFlower=(req,res)=>{
    let flowerData=req.body;
    console.log(req.body);
    const newflower = new flowerModel({...flowerData})
    newflower.save();
}

const getData=(req,res)=>{
    let email = req.params.email;
    flowerModel.find({email : email},(error,item)=>{
        res.send(item)
    })
    
}

const deleteFlower=(req,res)=>{
    let index = req.params.id;
    console.log(req.params.id);
    flowerModel.findByIdAndRemove(index,(error,item)=>{
        flowerModel.find({ },(error,element)=>{
            res.send(element)
        })
    })

}

const updateFlower=(req,res)=>{
    let index = req.params.id;
    let updateData = req.body;
    flowerModel.findByIdAndUpdate(index,{...updateData},(error,item)=>{
        flowerModel.find({ },(error,element)=>{
            res.send(element)
        })
    })


    
}

module.exports = {getFlower,addFlower,getData,deleteFlower,updateFlower}