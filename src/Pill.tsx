import React from "react";
import "./Pill.css";

export type PillType = {
  label: string;
  icon?: React.ReactNode;
  bgcolor?: string;
};

export interface PillProps {
  onClose?: (index: number) => void;
  data: Array<PillType>;
  rounded?: boolean;
  onSelect?: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  itemClassName?: string;
  wrapperClassName?: string;
}

const Pill: React.FC<PillProps> = ({
  onClose,
  data,
  rounded,
  onSelect,
  itemClassName,
  wrapperClassName,
}) => {
  const createPill = () => {
    return data.map((value, index) => {
      return (
        <button
          style={{ backgroundColor: value.bgcolor ? value.bgcolor : "#eee" }}
          key={index}
          className={`${rounded ? "rounded" : ""} ${
            itemClassName || ""
          } defaultPill`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            e.stopPropagation();
            onSelect?.(e, index);
          }}
        >
          {value.icon && <span className="iconContainer">{value.icon}</span>}
          <span id={`label-${index}`}>{value.label}</span>
          {onClose ? (
            <span
              className="closeButton"
              role="button"
              aria-label={`Close ${value.label}`}
              aria-labelledby={`label-${index}`}
              role="button"
              tabIndex={0}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                onClose?.(index);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  onClose?.(index);
                } else if (e.key === "Escape") {
                  (e.target as HTMLElement).blur(); // Remove focus on Escape key press
                }
              }}
            >
              X
            </span>
          ) : (
            ""
          )}
        </button>
      );
    });
  };

  return <div className={wrapperClassName}>{createPill()}</div>;
};

export default Pill;
