import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';

const app =  express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is live!');
});

app.listen(PORT, () => {
  console.log(`Server is serving on port ${PORT}`);
}); 