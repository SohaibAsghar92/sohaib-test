import { FC } from "react";

interface Props {
  title: string;

  value: string;
}
const InfoKey: FC<Props> = ({ title, value }) => {
  return (
    <p className="text-gray-700">
      <strong>{title}:</strong> {value}
    </p>
  );
};

export default InfoKey;
