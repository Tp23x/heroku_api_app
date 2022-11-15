const mongoose = require('mongoose')

const DB_PATH = 'mongodb://localhost:27017/cyh'

mongoose.Promise = global.Promise
mongoose.connect(DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection
  .once('open', () => console.log('mongodb connected'))
  .on('error', (err) => console.log('mongodb connected error:', err))


  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);

  

module.exports = mongoose
