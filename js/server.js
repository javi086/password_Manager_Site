// 1. Import dependencies
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
// 2. Initialize Stripe with a test secret key
const stripe = require('stripe')('sk_test_51T98ZILrO7VaOxlChjqWluZvKvb47attVvplYBHL4G5F8XTATAfhpTVAouyHJEC6JYE1aZ5PCCs5PvDw6Ay699bl00hIQrvrzA'); // This is a placeholder key

// 3. Create a route to get your products
app.get('/api/products', async (req, res) => {
    try {
        // 4. Use the Stripe API to "list" products
        // Documentation: https://docs.stripe.com/api/products/list
        const products = await stripe.products.list({
            limit: 3, // We only want the top 3 (Free, Premium, Family)
            active: true,
            expand: ['data.default_price']
        });

        // 5. Send the products back to your frontend as JSON
        res.json(products.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));