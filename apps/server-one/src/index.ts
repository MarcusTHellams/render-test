import 'dotenv/config';

import express from 'express';

const { PORT = '3100' } = process.env;

const app = express();

app.get('/', (_, resp) => {
  resp.send('Hello from server-one');
});

app.listen(+PORT, () => {
  console.log(`Listening to server one on port: ${PORT}`);
});
