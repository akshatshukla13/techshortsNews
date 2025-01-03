import cors from 'cors';
import { config } from '../config.js';

export const corsMiddleware = cors({
  origin: config.clientOrigin,
  methods: ['GET'],
  credentials: true
});