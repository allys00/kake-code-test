const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const cors = require("cors");

const app = express();

// TODO: Config origin after development
app.use(cors({ origin: "*" }));

const server = createServer(app);

// TODO: Config origin after development
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

io.on("connection", (socket) => {
  socket.on("sendCount", (data) => {
    console.log(`${socket.id} send count: ${data}`);
  });
});

setInterval(() => {
  io.emit("collectCounts");
}, 1000);
