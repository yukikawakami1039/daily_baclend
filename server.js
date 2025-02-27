// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const auth = require('./src/routes/auth');
const report = require('./src/routes/report');
const comment = require('./src/routes/comment');
const { authenticateToken } = require('./src/middleware/auth');
const connectDB = require('./src/config/db');

// JSONボディパーサ
app.use(express.json());
//authのルーティング
app.use('/auth', auth);
//認証ミドルウェア
app.use(authenticateToken);
//reportのルーティング
app.use('/report', report);
// commentのルーティング
app.use('/comment', comment);

// データベースに接続
connectDB();

app.listen(PORT, () => {
  console.log(`サーバーを起動中:${PORT}`);
});
