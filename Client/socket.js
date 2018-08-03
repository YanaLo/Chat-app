const socket = io.connect("http://localhost:4000")
// Const is variable. Variable name is socket.
// Connecting socket to the server

const message = document.getElementById("Message")
// Variable name = html message defined by ID-"Message", whatever you type in

const buttonSend = document.getElementById("Send")
// Variable name=buttonSend equla to html Id "Send"
const messages = document.getElementById("messageContent")

buttonSend.addEventListener("click",function(){
    socket.emit("banana",{
      content:message.value,
      timeStamp:new Date
      })
  })
  socket.on("banana",function(data){
    messages.innerHTML += "<div>" + data.content + "<span>" + data.timeStamp + "</span></div>"
  })
    // When the user clicks a message will send via socket to the server
