const express = require('express')
const mongoose = require('./db')
const Person = require('./db/person')
const Location = require('./db/location')
const Temp = require('./db/temp')
const Watch = require('./db/watch')
const Data = require('./db/data')
const Band = require('./db/smartwatch')
const Temperature = require('./db/temperature')
const Sumdata= require('./db/tempgps')
const MacAdd= require('./db/macAdd')
const W= require('./db/W')

const HospitalList = require('./db/hospitalList')
const Regisperson = require('./db/regisperson')
const Symtomdata = require('./db/symtomdata')
const Symtomperson = require('./db/symtomperson')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8080;



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.send('hello world')
})

/* app.get('/get-person-list', function(req, res) {
    res.send('hellopeople')
}) */

/* -------- GET WITH PHP -------- <Not sure pls recheck> ถ้าอันล่างไม่ได้สำหรับเว็บ (xmlhttp get request)
$xml = file_get_contents("http://10.10.10.152:3000/get-person-list");



/* -------- GET WITH REACT-NATIVE --------

 const [persons, setPerson] = useState([]) // อยู่ใน component function

 useEffect(() => {
    fetch('http://10.10.10.152:3000/get-person-list', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         setPerson(responseJson)
      })
      .catch((error) => {
         console.error(error);
      });
 }, [])

    return (
        <View>
            {persons.map(({ id, name, age }) => (
                <Text>{id} : My name is {name}, {age} years old</Text>
            ))}
        </View>
    )

*/

//---------------------------GET POST DATA PERSON ------------------------------//

app.get('/get-person-list', function(req, res) {
    Person.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-person-id/:id', function(req, res) {
    const id = req.params.id
    Person.findOne({ id }, function(err, success) {
        if (err) {
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-person', function(req, res) {
    // const id = req.body.id
    // const name = req.body.name
    // const age = req.body.age
    const { id, name, age } = req.body // json data always come from req.body
    const newPerson = new Person({
        id, // id: id,
        name, // name: name,
        age, // age: age,
    })

    newPerson.save(function(err, success) {
        if (err) {
            res.send('fail add')
        } else {
            res.send('saved person')
        }
    })
})

//---------------------------GET POST DATA HOSPITAL ------------------------------//

app.get('/get-hospital-list', function(req, res) {
    HospitalList.find({}, function(err, success) {
        if (err) {
            res.send([hh])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-hospital-id/:idHos', function(req, res) {
    const idHos = req.params.idHos
    HospitalList.findOne({ idHos }, function(err, success) {
        if (err) {
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-hospital', function(req, res) {
    const { idHos, name } = req.body 
    const newHospitalList = new HospitalList({
        idHos, // id: id,
        name, // name: name,
    })

    newHospitalList.save(function(err, success) {
        if (err) {
            res.send('fail add')
        } else {
            res.send('saved')
        }
    })
})

//---------------------------GET POST DATA REGISPER ------------------------------//

app.get('/get-personregis-list', function(req, res) {
    Regisperson.find({}, function(err, success) {
        if (err) {
            res.send([hh])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-personregis-id/:id', function(req, res) {
    const id = req.params.id
    Regisperson.findOne({ id }, function(err, success) {
        if (err) {
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-personregis', function(req, res) {
    const { Hosname, name, citizenID, birthday, age, sex, tell, address, atk } = req.body 
    const newRegisperson = new Regisperson({
        Hosname, 
        name, 
        citizenID, 
        birthday, 
        age, 
        sex, 
        tell, 
        address, 
        atk,
    })

    newRegisperson.save(function(err, success) {
        if (err) {
            res.send('fail addddd')
        } else {
            res.send('saved regisperson')
        }
    })
})

//---------------------------GET POST DATA REGISPER22 ------------------------------//

app.get('/get-regis-list', function(req, res) {
    Symtomdata.find({}, function(err, success) {
        if (err) {
            res.send([hh])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-regis-id/:id', function(req, res) {
    const id = req.params.age
    Symtomdata.findOne({ id }, function(err, success) {
        if (err) {
            res.send()
        } else {
            res.send(success)
        }
    })
})

app.post('/add-regis', function(req, res) {
    const { Hosname, name, citizenID, birthday, age, sex, tell, address, atk, date, symptom, dateS,
        temp,
        spo,
        pulse,
        systolic,
        diastolic,
        orther, } = req.body 
    const newSymtomdata = new Symtomdata({
        Hosname, 
        name, 
        citizenID, 
        birthday, 
        age, 
        sex, 
        tell, 
        address, 
        atk,
        date,
        symptom,
            dateS,
            temp,
            spo,
            pulse,
            systolic,
            diastolic,
            orther,
    })

    newSymtomdata.save(function(err, success) {
        if (err) {
            res.send('fail add ni')
        } else {
            res.send('saved regissss')
        }
    })
})

app.put('/add-regisdetail/:id', function(req, res) {
    const citizenID = req.params._id
    Symtomdata.symptom.findOneAndUpdate({ citizenID }, function(err, success) {
      
        const { symptom, dateS,
            temp,
            spo,
            pulse,
            systolic,
            diastolic,
            orther, } = req.body 
        const newSymtomdata = new Symtomdata.symptom.post({
    
            symptom,
                dateS,
                temp,
                spo,
                pulse,
                systolic,
                diastolic,
                orther,
        })
    
        newSymtomdata.save(function(err, success) {
            if (err) {
                res.send('fail add ni')
            } else {
                res.send('saved regissss')
            }
        })

    })
    
})

//---------------------------GET POST DATA Symtonperson ------------------------------//

app.get('/get-symptom', function(req, res) {
    Symtomperson.find({}, function(err, success) {
        if (err) {
            res.send([hh])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-symptom-id/:_id', function(req, res) {
    const iD = req.params.citizenIDD
    Symtomperson.findOne({ iD }, function(err, success) {
        if (err) {
            res.send([0])
        } else {
            res.send(success)
        }
    })
})

app.post('/add-symptom', function(req, res) {
    const { citizenIDD, dateS,
        temp,
        spo,
        pulse,
        systolic,
        diastolic,
        orther,
        atk } = req.body 
    const newSymtomperson = new Symtomperson({
        citizenIDD,
        dateS,
        temp,
        spo,
        pulse,
        systolic,
        diastolic,
        orther,
        atk
    })

    newSymtomperson.save(function(err, success) {
        if (err) {
            res.send('fail add symtom')
        } else {
            res.send('saved add symtom')
        }
    })
})


//---------------------------GET POST DATA LOCATION------------------------------//

app.post('/update-location', function(req, res) { // python should call this api for save lat, long to db
    const { carId, lat, long }= req.body

    Location.findOneAndUpdate(
        { carId },
        { lat, long }
    , function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('success')
        }
    })
})

app.get('/get-location/:carId', function(req, res) {
    const carId = req.params.carId
    Location.findOne({ carId }, function(err, success) {
        if (err) {
            console.log('err', err)
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-loca', function(req, res) {
    // const id = req.body.id
    // const name = req.body.name
    // const age = req.body.age
    const {  carId, lat, long} = req.body // json data always come from req.body
    const newLocation = new Location({
        carId, // age: age,
        lat,
        long,
    })

    newLocation.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved Locationnn')
        }
    })
})

app.get('/get-lo-list', function(req, res) {
    Location.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

//---------------------------GET POST DATA TEMPERATURE ------------------------------//

app.get('/get-temp-list', function(req, res) {
    Temp.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-temp-id/:id', function(req, res) {
    const id = req.params.id
    Temp.findOne({ id }, function(err, success) {
        if (err) {
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-temp', function(req, res) {
    // const id = req.body.id
    // const name = req.body.name
    // const age = req.body.age
    const {  temp, hum, datetime } = req.body // json data always come from req.body
    const newTemp = new Temp({
        temp, // age: age,
        hum,
        datetime,
    })

    newTemp.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved temp')
        }
    })
})

//---------------------------GET POST DATA WATCH ------------------------------//

app.get('/getbandincar', function(req, res) {
    Watch.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-watch-id/:id', function(req, res) {
    const id = req.params.id
    Watch.findOne({ id }, function(err, success) {
        if (err) {
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-watch', function(req, res) {
    
    const {  carid, watch, mac_address,rssi, name } = req.body // json data always come from req.body
    const newWatch = new Watch({
        carid,
        watch,
              mac_address,
              rssi,
              name,
           
    })

    newWatch.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved watch')
        }
    })
})

//---------------------------GET POST DATA ALLDATA ------------------------------//

app.get('/get-alldata-list', function(req, res) {
    Data.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-alldata-id/:id', function(req, res) {
    const id = req.params.id
    Data.findOne({ id }, function(err, success) {
        if (err) {
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-alldata', function(req, res) {
    const { date, time, id, lat, lng, temp,hum } = req.body 
    const newData = new Data({
        date,
        time,
        id,
        lat,
        lng,
        temp,
        hum,
    })

    newData.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved Data')
        }
    })
})


//---------------------------GET POST DATA SMARTWATCH ------------------------------//

app.get('/getband', function(req, res) {
    Band.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-band-id/:id', function(req, res) {
    const id = req.params.id
    Band.findOne({ id }, function(err, success) {
        if (err) {
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-band', function(req, res) {
    const { studyID,nameS,mac_address } = req.body // json data always come from req.body
    const newBand = new Band({
        studyID, 
        nameS,
        mac_address,
    })

    newBand.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved band')
        }
    })
})


//------------------

app.post('/update-Temperature', function(req, res) { // python should call this api for save lat, long to db
    const { carid, tempe,humi }= req.body

    Temperature.findOneAndUpdate(
        { carid },
        { tempe,humi }
    , function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('success')
        }
    })
})

app.get('/get-Temperature/:carid', function(req, res) {
    const carid = req.params.carid
    Temperature.findOne({ carid }, function(err, success) {
        if (err) {
            console.log('err', err)
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-Temperature', function(req, res) {
    const {  carid, tempe, humi} = req.body // json data always come from req.body
    const newLocation = new Temperature({
        carid, // age: age,
        tempe,
        humi,
    })

    newLocation.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved Temperature')
        }
    })
})

app.get('/get-Temperature-list', function(req, res) {
    Temperature.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})


//------------------

app.post('/update-data', function(req, res) { // python should call this api for save lat, long to db
    const { carId, temp, hum ,date, time, lat, lng  }= req.body

    Sumdata.findOneAndUpdate(
        { carId },
        { temp,hum ,date, time, lat, lng }
    , function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('success')
        }
    })
})

app.get('/get-data/:carId', function(req, res) {
    const carId = req.params.carId
    Sumdata.findOne({ carId }, function(err, success) {
        if (err) {
            console.log('err', err)
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-data', function(req, res) {
    const {  carId, temp, hum ,date, time, lat, lng } = req.body // json data always come from req.body
    const newSumdata = new Sumdata({
        carId,
        temp, 
        hum ,
        date, 
        time, 
        lat, 
        lng ,
    })

    newSumdata.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved Alldata')
        }
    })
})

app.get('/get-data-list', function(req, res) {
    Sumdata.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

//==========


app.post('/update-mac', function(req, res) { // python should call this api for save lat, long to db
    const {car , mac_rssi }= req.body

    MacAdd.findOneAndUpdate(
        { car },
        { mac_rssi }
    , function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('success')
        }
    })
})

app.get('/get-mac/:car', function(req, res) {
    const car = req.params.car
    MacAdd.findOne({ car }, function(err, success) {
        if (err) {
            console.log('err', err)
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-mac', function(req, res) {
    const {  car, mac_rssi} = req.body // json data always come from req.body
    const newMacAdd = new MacAdd({
        car,
        mac_rssi
    })

    newMacAdd.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved MacAdd')
        }
    })
})

app.get('/get-mac-list', function(req, res) {
    MacAdd.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

//---------------------------GET POST DATA RSSI IN CAR------------------------------//

app.post('/update-location', function(req, res) { // python should call this api for save lat, long to db
    const { carId, lat, long }= req.body

    Location.findOneAndUpdate(
        { carId },
        { lat, long }
    , function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('success')
        }
    })
})

app.get('/get-location/:carId', function(req, res) {
    const carId = req.params.carId
    Location.findOne({ carId }, function(err, success) {
        if (err) {
            console.log('err', err)
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/add-loca', function(req, res) {
    // const id = req.body.id
    // const name = req.body.name
    // const age = req.body.age
    const {  carId, lat, long} = req.body // json data always come from req.body
    const newLocation = new Location({
        carId, // age: age,
        lat,
        long,
    })

    newLocation.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved Locationnn')
        }
    })
})

app.get('/get-lo-list', function(req, res) {
    Location.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

//'''''''''''''''''''''''''''''''''''''''

app.get('/getW', function(req, res) {
    W.find({}, function(err, success) {
        if (err) {
            res.send([])
        } else {
            res.send(success)
        }
    })
})

app.get('/get-W-id/:id', function(req, res) {
    const id = req.params.id
    W.findOne({ id }, function(err, success) {
        if (err) {
            res.send({})
        } else {
            res.send(success)
        }
    })
})

app.post('/addW', function(req, res) {
    
    const {  carid, watch, mac_address,rssi, name } = req.body // json data always come from req.body
    const newW = new W({
        watch,
              mac_address,
              rssi,
              name,
              carid,
    })

    newW.save(function(err, success) {
        if (err) {
            res.send('fail')
        } else {
            res.send('saved W')
        }
    })
})

app.listen(PORT, function() {
    console.log(`'running port '.${PORT}`)
})
