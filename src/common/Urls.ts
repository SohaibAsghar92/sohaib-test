export default {
  getTimeSeries: (apiKey: string) =>
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=${apiKey}`,
};
