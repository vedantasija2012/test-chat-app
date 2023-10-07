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
    console.log("New Connection")

    socket.on('joined', ({user})=>{
        users[socket.id] = user;
        console.log(`${user} Has Joined chat`)
        socket.broadcast.emit('user-joined', {user:"Admin", message:`${users[socket.id]} has joined`})
        socket.emit('welcome', {user:"Admin", message:`${users[socket.id]} Welcome to chat app`})
    })

    socket.on('message', ({message, id})=>{
        io.emit('send-message', {user:users[id], message, id})
    })
    
    socket.on('disconnection', ()=>{
        socket.broadcast.emit('user-left', {user:'Admin', message: `${users[socket.id]} left the chat`})
        console.log(`${users[socket.id]} left the chat`);
        console.log(users)
    })
    
})
server.listen(port, ()=>{
    console.log(`Listening at: http://localhost:${port}`)
})