import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
//Backend is pending.
// MongoDB connection
// mongoose.connect('your-mongodb-connection-string');

// Routes and other server logic go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
