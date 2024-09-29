/* eslint-disable react/prop-types */
import React from "react";
import "./Pill.css";

const Pill = ({
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
          onClick={(e) => {
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
              onClick={(e) => {
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
