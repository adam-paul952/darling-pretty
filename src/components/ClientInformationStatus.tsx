import React from "react";
import { GrCheckmark } from "react-icons/gr";

interface IClientInfoStatusProps {
  title: string;
  complete?: boolean;
}

const ClientInformationStatus: React.FC<IClientInfoStatusProps> = ({
  title,
  complete,
}) => {
  return (
    <div className="container mx-auto my-5 flex flex-row items-center bg-green-300 rounded-lg">
      <div className="flex flex-col w-2/3 items-center">
        <h2>{title}</h2>
      </div>
      <div className="flex flex-col w-1/3">
        <GrCheckmark />
      </div>
    </div>
  );
};

export default ClientInformationStatus;
