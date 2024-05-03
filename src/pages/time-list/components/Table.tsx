import { FC } from "react";

import { IApiData } from "../types/api-data";
import TableData from "../../../components/TableData";
import { TableHead } from "../../../components";
import { IValues } from "../types/types";

interface Props {
  title: string;
  data: IApiData;
}

const columnNames: string[] = [
  "Date",
  "Open",
  "High",
  "Low",
  "Close",
  "Adjusted Close",
  "Volume",
  "Dividend Amount",
  "Split Coefficient",
];
const tableKeys: string[] = [
  "open",
  "high",
  "low",
  "close",
  "adjusted close",
  "volume",
  "dividend amount",
  "split coefficient",
];

const Table: FC<Props> = ({ data }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columnNames.map((columnName, key) => {
              return <TableHead key={key} value={columnName} />;
            })}
          </tr>
        </thead>
        <tbody>
          {Object.entries(data["Time Series (Daily)"]).map(
            ([date, values], index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td>{date}</td>
                {tableKeys.map((tableKey, key) => {
                  const newKey: keyof IValues = `${
                    key + 1
                  }. ${tableKey}` as keyof IValues;
                  const newValue: string = values[newKey];
                  return <TableData key={key} value={newValue} />;
                })}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
