import { FC } from "react";
import { IInfoProps } from "../types";
import ErrorText from "./ErrorText";

const BaseCountryInfo: FC<IInfoProps> = ({ flagUrl, title, countryCode }) => {
  return (
    <div className="info-header">
      <h2 className="info-title">{title}</h2>
      {flagUrl ? (
        <img src={flagUrl} alt={`Flag of ${countryCode}`} width={150} />
      ) : (
        <ErrorText errorText="flag" />
      )}
    </div>
  );
};

export default BaseCountryInfo;
