import 'dotenv/config';

import cors from 'cors';
import express from 'express';

// config vars
const port = process.env.PORT || 8080;

// initialize
const app = express();

// app-level middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});
 
app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
 
app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});
 
app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
