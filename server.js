const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 기본 페이지
app.get("/", (req, res) => {
    res.send("🚀 Render 서버 정상 동작 중!");
});

// 메시지 전송 API
app.post("/message", (req, res) => {
    const { from, to, text } = req.body;
    console.log(`[메시지 수신] ${from} -> ${to}: ${text}`);

    res.json({
        status: "ok",
        received: { from, to, text }
    });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`✅ 서버가 포트 ${PORT}에서 실행 중`);
});