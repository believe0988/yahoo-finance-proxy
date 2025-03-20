
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/price', async (req, res) => {
  const symbol = req.query.symbol;
  try {
    const response = await axios.get(\`https://query1.finance.yahoo.com/v7/finance/quote?symbols=\${symbol}\`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching Yahoo Finance data');
  }
});

app.listen(port, () => {
  console.log(\`Yahoo Proxy Server running at http://localhost:\${port}\`);
});
