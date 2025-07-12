import express from 'express';
import pcwRoutes from './routes/pcws.routes.js';
import morgan from 'morgan';
import { swaggerUi, swaggerDocs } from './swagger.js';
import cors from 'cors';
import serverless from 'serverless-http'; // 👈 NUEVO

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(pcwRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Exporta como handler para serverless
export const handler = serverless(app);
