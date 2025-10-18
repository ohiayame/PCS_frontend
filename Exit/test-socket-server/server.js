import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

// HTTP 서버 생성
const server = http.createServer(app);

// Socket.io 서버 설정
const io = new Server(server, {
  cors: {
    origin: "*", // 프론트엔드 주소 (예: http://localhost:5173)
    methods: ["GET", "POST"],
  },
});

const PORT = 5002;

// 클라이언트 연결 시 동작
io.on("connection", (socket) => {
  console.log("✅ 클라이언트 연결됨:", socket.id);

  // 연결 직후 테스트 메시지 전송
  socket.emit("message", "서버 연결 성공!");

  // 주기적으로 실제 형식의 더미 데이터 전송
  const interval = setInterval(() => {
    const fakeData = {
      number: String(Math.floor(1000 + Math.random() * 9000)),
      image: "",
      name: "A3",
      entry_time:
        Math.floor(Date.now() / 1000) +
        Math.floor((Math.random() - 0.5) * 10800),
      price: "10000",
    };

    socket.emit("data", fakeData);
    console.log("📤 보냄:", fakeData);
  }, 3000);

  // 연결 해제 시
  socket.on("disconnect", (reason) => {
    console.log("❌ 연결 해제됨:", socket.id, "사유:", reason);
    clearInterval(interval);
  });
});

// 테스트용 HTTP 라우트
app.get("/", (req, res) => {
  res.send("Socket.io Test Server is running!");
});

// 서버 실행
server.listen(PORT, () => {
  console.log(`🚀 Socket.io 서버 실행 중: ws://127.0.0.1:${PORT}`);
});
