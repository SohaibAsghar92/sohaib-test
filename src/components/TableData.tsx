import { FC } from "react";

interface Props {
  value: string;
}

const TableData: FC<Props> = ({ value }) => {
  return <td className="px-6 py-4">{value}</td>;
};

export default TableData;
