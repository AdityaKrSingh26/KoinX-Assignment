import express from 'express';
import cron from 'node-cron';

const app = express();

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// impor Routers and Jobs
import fetchAndStorePrices from './jobs/fetchPrices.js';
import statsRouter from './routes/stats.routes.js';
import deviationRouter from './routes/deviation.routes.js';


// Schedule the background job to run every 2 hours
cron.schedule('0 */2 * * *', fetchAndStorePrices);

// Routes
app.use('/stats', statsRouter);
app.use('/deviation', deviationRouter);

export { app }