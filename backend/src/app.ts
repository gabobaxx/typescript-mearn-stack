import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import videoRoutes from './routes/videos.routes';

const app: Application = express();

// settings
app.set('port', config.PORT);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(videoRoutes);

export default app;
