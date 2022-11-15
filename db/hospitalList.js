const mongoose = require('mongoose')

const HospitalList = new mongoose.Schema({ // type => String, Number, Boolean, Date
  idHos: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

const HospitalListModel = mongoose.model('HospitalList', HospitalList)

module.exports = HospitalListModel
