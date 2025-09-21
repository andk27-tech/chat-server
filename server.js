const express = require("express");
const app = express();
const path = require("path"); // 추가
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 👉 이 줄 추가: public 폴더 내 HTML 파일 정적 서빙
app.use(express.static(path.join(__dirname, 'public')));


// 기본 페이지
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html')); // 수정
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