const stripe = require('stripe')('sk_test_51T98ZILrO7VaOxlChjqWluZvKvb47attVvplYBHL4G5F8XTATAfhpTVAouyHJEC6JYE1aZ5PCCs5PvDw6Ay699bl00hIQrvrzA');

stripe.products.create({
  name: 'Starter Subscription',
  description: '$12/Month subscription',
}).then(product => {
  stripe.prices.create({
    unit_amount: 1200,
    currency: 'usd',
    recurring: {
      interval: 'month',
    },
    product: product.id,
  }).then(price => {
    console.log('Success! Here is your starter subscription product id: ' + product.id);
    console.log('Success! Here is your starter subscription price id: ' + price.id);
  });
});