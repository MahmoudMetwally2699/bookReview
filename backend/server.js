const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
