const express = require('express');
const socket = require('socket.io');
const app = express();
app.use(express.static("public"));

const Port = process.env.PORT||5000;
 let server=app.listen(Port, () => {
    console.log("server started");
 })
let io = socket(server);
io.on('connection', (socket) => {
    console.log("made socket connection");
    socket.on("beginPath", (data) => {
        io.sockets.emit("beginPath", data);
        
    })
    socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);


    })
    socket.on("redoUndo", (data) => {
        io.socket.emit("redoUndo", data);

    })
})
