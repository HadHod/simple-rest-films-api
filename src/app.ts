import express from 'express';

import routes from './routes';
import api from './api';

const app = express();
app.use(express.json());
app.use('/', routes);
app.use('/api', api);

export default app;
