import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user.route';
import { tourRoutes } from './routes/tour.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tours', tourRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Mongoose Project Running!');
});

export default app;
