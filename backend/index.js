const express = require('express')
const http = require('http');
const cors = require('cors')
const socketIO = require('socket.io');
const port = 4500 || process.env.PORT

const app=express();

const users = [];

app.use(cors());

app.get('/', (req,res)=>{
    res.send("Working good");
})

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', (socket)=>{
    console.log("New Connection", socket.id)
    // socket.broadcast.emit('user-joined', {user:"Admin", message:`${users[socket.id]} has joined`})
    
    socket.on("joined-Room", (user)=>{
        io.sockets.emit("user-joined", {user: "Admin", message: `${user.username} joined the chat`})
        socket.emit('welcome', {user:"Admin", message:`${user.username} Welcome to chat!`})
        console.log(user)
    })

    socket.on('joined', ({user})=>{
        users[socket.id] = user;
        console.log(`${user} Has Joined chat`)
    })
    socket.on('message', ({message, id})=>{
        io.emit('send-message', {user:users[id], message, id})
    })
    
    socket.on('disconnect', ()=>{
        console.log("socket disconnected")
        io.local.emit("disconnected-user", {user: "Admin", message: ` left the chat`})
        console.log(`${users[socket.id]} left the chat`);
    })
    
})
server.listen(port, ()=>{
    console.log(`Listening at: http://localhost:${port}`)
})