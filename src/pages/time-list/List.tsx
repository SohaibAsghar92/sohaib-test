import { useEffect, useState } from "react";
import axios from "axios";

import { Urls } from "../../common";
import { IApiData } from "./types/api-data";
import Info from "./components/Info";
import Table from "./components/Table";

const List = () => {
  const [data, setData] = useState<IApiData | null>(null);
  const getData = async () => {
    try {
      const response = await axios.get(
        Urls.getTimeSeries(import.meta.env.VITE_API_KEY)
      );
      setData(response.data);
    } catch (err) {
      console.log("error:", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">API Information</h1>
      {data !== null && (
        <>
          <Info data={data} />
          <Table title="Time Series (Daily)" data={data} />
        </>
      )}
    </div>
  );
};

export default List;
