import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalRouter } from './routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', globalRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running!",
  });
});

export default app;