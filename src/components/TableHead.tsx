import { FC } from "react";

interface Props {
  value: string;
}

const TableHead: FC<Props> = ({ value }) => {
  return (
    <th scope="col" className="px-6 py-3">
      {value}
    </th>
  );
};

export default TableHead;
