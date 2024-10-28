import React from "react";
import "./Pill.css";

export type PillType = {
  label: string;
  icon?: React.ReactNode;
  bgcolor?: string;
};

interface PillProps {
  onClose?: (index: number) => void;
  data: Array<PillType>;
  rounded?: boolean;
  onSelect?: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  pillClassName?: string;
  containerClassName?: string;
}

const Pill: React.FC<PillProps> = ({
  onClose,
  data,
  rounded,
  onSelect,
  pillClassName,
  containerClassName,
}) => {
  const createPill = () => {
    return data.map((value, index) => {
      return (
        <button
          style={{ backgroundColor: value.bgcolor ? value.bgcolor : "#eee" }}
          key={index}
          className={`${rounded ? "rounded" : ""} ${
            pillClassName ? "pill" : ""
          } defaultPill`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            e.stopPropagation();
            onSelect && onSelect(e, index);
          }}
        >
          {value.icon && <span className="iconContainer">{value.icon}</span>}
          <span>{value.label}</span>
          {onClose ? (
            <button
              className="closeButton"
              aria-label={`Close ${value.label}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                onClose && onClose(index);
              }}
            >
              X
            </button>
          ) : (
            ""
          )}
        </button>
      );
    });
  };

  return <div className={containerClassName}>{createPill()}</div>;
};

export default Pill;
