const express = require ("express")
const path = require("path")
const socket = require("socket.io")
 // variable is called express
 // The variable is equal to getting the express code and importing it into this file


const app = express()
// variable 'app' equals to 'express' 'is being invoked when called


const server = app.listen(4000)
// Server is equal to listening to our local port 4000

// app.get('/', function(req,res){
//   res.send('Hello there')
// })
// Route




app.use(express.static("client"))

app.get('/', function (req,res){
  res.sendFile(path.join(__dirname,'/client/index.html'))
})

app.get('/messages', function (req,res){
  res.sendFile(path.join(__dirname,'/client/Yana.html'))
})

const io = socket(server)
io.on('connection',function(socket){
  socket.on("banana",function(data){
    io.sockets.emit("banana",data)
  })
})


// socket on=bject and on is function

console.log("App is running on port: 4000")
// variable 'server' is equal to
