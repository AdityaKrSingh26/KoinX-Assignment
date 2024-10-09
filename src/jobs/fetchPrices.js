import axios from 'axios';
import CryptoPrice from '../models/CryptoPrice.model.js';

const API_KEY = process.env.API_KEY;
const COINGECKO_API_URL = `https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=${API_KEY}`


const fetchAndStorePrices = async () => {
    try {
        const response = await axios.get(COINGECKO_API_URL, {
            params: {
                ids: 'bitcoin,ethereum,matic-network',
                vs_currencies: 'usd',
                include_market_cap: 'true',
                include_24hr_change: 'true',
            },
            headers: {
                'x-cg-demo-api-key': API_KEY,
            },
        });

        const coins = ['bitcoin', 'ethereum', 'matic-network'];
        for (const coin of coins) {
            const data = response.data[coin];

            if (data) {
                await CryptoPrice.create({
                    coin,
                    price: data.usd,
                    marketCap: data.usd_market_cap,
                    change24h: data.usd_24h_change,
                });
            }
        }

        console.log('Prices fetched and stored successfully');
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
};

export default fetchAndStorePrices;
