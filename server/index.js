import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './routes/route.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use('/', Router);
//environment variable
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

// MongoDB connection
Connection(USERNAME,PASSWORD);
// mongoose.connect('your-mongodb-connection-string');

// Routes and other server logic go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
DefaultData();