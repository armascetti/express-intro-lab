//import modules
import express from 'express'
import * as halloween from './data/halloween.js'


//create express application
const app = express()


//Configure the app 
app.set('view engine', 'ejs')


//Mount routes 
//localhost:4000/
app.get('/', function(req, res) {
  res.redirect('/home')
})

//localhost:4000/home
app.get('/home', function(req,res){
res.send('<h1>The Best Halloween Villains</h1>')
})

//localhost:4000/halloween 
app.get('/halloween', function(req, res) {
halloween.find({}, function(error, villains) {
    res.render('halloween/index', {
      villains: villains,
      error: error
    })
  })
})

//tell our app to listen to port 4000 
app.listen(4000, function(){
  console.log('listening on port 4000')
})