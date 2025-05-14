import { PrismaClient } from '@prisma/client';
import express from 'express';
import { setupSwagger } from './swagger';
import postsRouter from './posts/routes';

const prisma = new PrismaClient();
const app = express();
const port = 3001;

setupSwagger(app);

app.use(postsRouter);

app.get('/', (req, res) => {
  res.send('Test!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
