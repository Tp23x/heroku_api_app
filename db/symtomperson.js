const mongoose = require('mongoose')

const Symtonperson = new mongoose.Schema({ // type => String, Number, Boolean, Date
  citizenIDD: {
    type: String,
  },
  dateS: 
    {
      type: String,
    },
    temp: {
      type: String,
    },
    spo: {
      type: String,
    },
    pulse: {
      type: String,
    },
    systolic: {
      type: String,
    },
    diastolic: {
      type: String,
    },
    diastortherolic: {
      type: String,
    },
    atk: {
      type: String,
    },

  
})

const SymtonpersonModel = mongoose.model('Symtonperson', Symtonperson)

module.exports = SymtonpersonModel
