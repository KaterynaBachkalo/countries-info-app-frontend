import { FC } from "react";
import sprite from "../img/sprite.svg";

interface IProps {
  className: string;
  name: string;
  width?: number;
  height?: number;
}

const Icon: FC<IProps> = ({
  name,
  width = 24,
  height = 24,
  className = "",
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <use href={`${sprite}#${name}`} />
  </svg>
);

export default Icon;
