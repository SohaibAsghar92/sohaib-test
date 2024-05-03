import { FC } from "react";
import { IApiData } from "../types/api-data";
import InfoKey from "./InfoKey";

interface Props {
  data: IApiData;
}

const Info: FC<Props> = ({ data }) => {
  return (
    <div className="mb-4 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">
        {data["Meta Data"]["1. Information"]}
      </h2>
      <InfoKey title="Symbol" value={data["Meta Data"]["2. Symbol"]} />
      <InfoKey
        title="Last Refreshed"
        value={data["Meta Data"]["3. Last Refreshed"]}
      />
      <InfoKey
        title="Output Size"
        value={data["Meta Data"]["4. Output Size"]}
      />
      <InfoKey title="Time Zone" value={data["Meta Data"]["5. Time Zone"]} />
    </div>
  );
};

export default Info;
