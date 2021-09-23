'use strict';
const mongoose = require('mongoose');

// class Flower{
//     constructor(items){
//         this.photo = items.photo;
//         this.name = items.name;
//         this.instructions = items.instructions;

//     }
// }

const flowerSchema = new mongoose.Schema({
    email : String,
    photo: String ,
    name: String ,
    instructions : String ,
  });

  const flowerModel = mongoose.model('flowersCollection', flowerSchema);

module.exports={flowerModel}