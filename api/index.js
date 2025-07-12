import { createVercelHandler } from 'express-to-vercel';
import { app } from '../src';

export default createVercelHandler(app);
