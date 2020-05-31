import express from 'express';
import cors from 'cors';

import routes from './routes';
import api from './api';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use('/api', api);

export default app;
