import { ITimeSeriesData } from "../../../types";

interface IApiData {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  "Time Series (Daily)": ITimeSeriesData;
}
