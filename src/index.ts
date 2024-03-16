import express from 'express';
import { config } from 'dotenv'

config()

const app = express();

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`🔥 Server is running on http://localhost:${port}`);
});