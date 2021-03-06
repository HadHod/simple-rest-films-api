import express from 'express';
import cors from 'cors';

import { generateDB } from './db/films';
import routes from './routes';
import api from './api';

const app = express();
generateDB();
app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use('/api', api);

export default app;
