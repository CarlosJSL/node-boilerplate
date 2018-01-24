import bodyParser from 'body-parser';
import express from 'express';
import load from 'express-load';
import logger from 'morgan';

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));



export default app;
