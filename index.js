require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./routes');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
