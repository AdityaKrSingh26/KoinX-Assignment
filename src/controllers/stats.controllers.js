import express from 'express';
import CryptoPrice from '../models/CryptoPrice.model.js';

const router = express.Router();

const statsController = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: 'Coin query parameter is required' });
    }

    try {
        const latestData = await CryptoPrice.findOne({ coin }).sort({ fetchedAt: -1 });

        if (!latestData) {
            return res.status(404).json({ error: 'No data found for the requested coin' });
        }

        res.json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            '24hChange': latestData.change24h,
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export {
    statsController
}