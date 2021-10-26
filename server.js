import express from 'express'
const app = express()

//Configure the app 
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.send('<h1>hello, friend</h1>')
})


app.get('/home', function(req,res){
res.render('home')
})


app.listen(4000, function(){
  console.log('listening on port 4000')
})