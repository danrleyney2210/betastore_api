import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import { router } from './app/router';
import path from 'node:path';

config();

const url = process.env.MONGODB_URL || 'localhost:27017';
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose
  .connect(url, { auth: { username, password }})
  .then(() => {
    const port = process.env.PORT || 3001;

    const app = express();
 
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });

    
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads')),
    );

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🔥 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {console.log('❌ Error connecting to MongoDB');
    console.log(url);
    console.log(username);
    console.log(password);
  });


