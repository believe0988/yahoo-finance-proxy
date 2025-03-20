export default async function handler(req, res) {
  const symbol = req.query.symbol;
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const price = data?.quoteResponse?.result[0]?.regularMarketPrice;

    if (price !== undefined) {
      res.status(200).json({ price, symbol });
    } else {
      res.status(500).json({ error: "Price not found", symbol });
    }
  } catch (error) {
    res.status(500).json({ error: error.message, symbol });
  }
}