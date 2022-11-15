const mongoose = require('mongoose')

const Symtomdata = new mongoose.Schema({ // type => String, Number, Boolean, Date
  Hosname: {
    type: String,
  },
  name: {
    type: String,
  },
  citizenID: {
    type: String,
  },
  birthday: {
    type: String,
  },
  age: {
    type: Number,
  },
  sex: {
    type: String,
  },
  tell: {
    type: String,
  },
  address: {
    type: String,
  },
  atk: {
    type: String,
  },
  date: {
    type: String,
  },
  symptom: [
    {
      "dateS": "",
      "temp": "",
      "spo": "",
      "pulse": "",
      "systolic": "",
      "diastolic": "",
      "orther": "",
    }
  ],
})

const SymtomdataModel = mongoose.model('Symtomdata', Symtomdata)

module.exports = SymtomdataModel
