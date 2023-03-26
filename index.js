const express = require('express');
const uploadRoute = require('./routes/uploadRoute');
const downloadRoute = require('./routes/downloadRoute');
const app = express();

app.use(express.json());
app.use('/upload', uploadRoute);
app.use('/download', downloadRoute);

app.listen(3001, () => {
  console.log('Server listening on port 3000');
});
