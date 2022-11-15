const mongoose = require('mongoose')

const Regisperson = new mongoose.Schema({ // type => String, Number, Boolean, Date
  Hosname: {
    type: String,
    //unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  citizenID: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  tell: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  atk: {
    type: String,
    required: true,
  },
})

const RegispersonModel = mongoose.model('Regisperson', Regisperson)

module.exports = RegispersonModel
