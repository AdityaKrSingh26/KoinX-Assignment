# Cryptocurrency Tracker

## Introduction
The Cryptocurrency Tracker is a Node.js application that fetches the current prices, market caps, and 24-hour changes of cryptocurrencies (Bitcoin, Ethereum, and Matic) using the CoinGecko API. The application stores the data in a MongoDB database and provides API endpoints to retrieve the latest stats and calculate the standard deviation of prices.

## Features
- Fetches and stores cryptocurrency data every 2 hours.
- Provides an API endpoint to retrieve the latest stats of a requested cryptocurrency.
- Calculates the standard deviation of the last 100 price records for a requested cryptocurrency.
- Designed with best practices for production-grade applications.

## Technologies Used
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for building APIs.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **Axios**: Promise-based HTTP client for making API requests.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Node-cron**: Scheduler for running background jobs.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AdityaKrSingh26/KoinX-Assignment.git
   cd KoinX-Assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB URI and CoinGecko API key:
   ```plaintext
   DB_USERNAME = username
   DB_PASSWORD = password
   PORT = 3000
   API_KEY = your_api_key
   ```

## Usage
1. Start the server:
   ```bash
   npm start
   ```

2. The application will fetch cryptocurrency prices every 2 hours and store them in the database.

## API Endpoints
### 1. Get Latest Stats
- **Endpoint**: `/api/stats`
- **Method**: `GET`
- **Query Parameters**:
  - `coin`: (string) The name of the cryptocurrency (e.g., `bitcoin`, `ethereum`, `matic`).
- **Sample Response**:
  ```json
  {
    "price": 40000,
    "marketCap": 800000000,
    "24hChange": 3.4
  }
  ```
![image](https://github.com/user-attachments/assets/7cde8e48-3e0c-4dc6-b892-a16255c9998c)


### 2. Get Price Deviation
- **Endpoint**: `/api/deviation`
- **Method**: `GET`
- **Query Parameters**:
  - `coin`: (string) The name of the cryptocurrency (e.g., `bitcoin`, `ethereum`, `matic`).
- **Sample Response**:
  ```json
  {
    "deviation": 4082.48
  }
  ```
![image](https://github.com/user-attachments/assets/a627a06c-4543-45f3-ac74-2df10f844f10)


