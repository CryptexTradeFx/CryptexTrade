const express = require('express');
const router = express.Router();

// Public route to get prices
router.get('/prices', (req, res) => {
    // In a real app, fetch this data from a market API
    const mockPrices = {
        BTCUSD: { price: 65000.50, change: '+1.2%' },
        ETHUSD: { price: 3500.20, change: '-0.5%' },
        EURUSD: { price: 1.0850, change: '+0.1%' }
    };
    res.status(200).json(mockPrices);
});

// Protected route to place an order (requires authentication middleware)
router.post('/order', (req, res) => {
    // Check JWT middleware goes here first
    res.status(201).send({ message: 'Order placed successfully (mock)' });
});

module.exports = router;
