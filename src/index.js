import 'dotenv/config';

import cors from 'cors';
import express from 'express';

// config vars
const port = process.env.port;

// initialize
const app = express();

// middleware
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
