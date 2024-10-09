import express from 'express';
import CryptoPrice from '../models/CryptoPrice.model.js';
import calculateDeviation from '../utils/calculateDeviation.js';

const router = express.Router();

const deviationController = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: 'Coin query parameter is required' });
    }

    try {
        const pricesData = await CryptoPrice.find({ coin })
            .sort({ fetchedAt: -1 })
            .limit(100)
            .select('price');

        const prices = pricesData.map((record) => record.price);
        const deviation = calculateDeviation(prices);

        res.json({ deviation });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export {
    deviationController
};