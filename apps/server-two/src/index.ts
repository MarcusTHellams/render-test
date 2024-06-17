import 'dotenv/config';

import express from 'express';

const { PORT = '3200' } = process.env;

const app = express();

app.get('/', (_, resp) => {
  resp.send('Hello from server-two');
});

app.listen(+PORT, () => {
  console.log(`Listening to server two on port: ${PORT}`);
});
