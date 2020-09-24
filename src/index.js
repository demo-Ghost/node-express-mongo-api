import 'dotenv/config';

import cors from 'cors';
import express from 'express';

const port = process.env.port;

const app = express();

app.use(cors());

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
