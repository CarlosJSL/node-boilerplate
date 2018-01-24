import bodyParser from 'body-parser';
import express from 'express';
import load from 'express-load';
import logger from 'morgan';

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));

load('routes').into(app);

export default app;
