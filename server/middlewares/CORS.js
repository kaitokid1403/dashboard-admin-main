const express = require('express');
const cors = require('cors');
const app = express();

// Sử dụng middleware cors
app.use(cors());

// Hoặc cấu hình cụ thể cho origin
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Các route khác
app.get('/api/v1/messages/:senderId/:recipientId', (req, res) => {
  // Xử lý yêu cầu của bạn ở đây
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
