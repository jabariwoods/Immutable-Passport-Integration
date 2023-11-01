const { PassportClient } = require('@immutable/passport');

const passport = new PassportClient({
  apiKey: process.env.PASSPORT_API_KEY,
  apiSecret: process.env.PASSPORT_API_SECRET,
});

