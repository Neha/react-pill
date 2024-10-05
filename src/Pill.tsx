import React, { useState} from "react";
import "./Pill.css";

interface PillProps {
  onClose?: (index: number) => void;
  data: Array<{
    label: string;
    icon?: React.ReactNode;
    bgcolor?: string;
  }>;
  rounded?: boolean;
  onSelect?: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  pillClassName?: string;
  containerClassName?: string;
  onEdit?: (label: string, index: number) => void;
}

const Pill: React.FC<PillProps> = ({
  onClose,
  data,
  rounded,
  onSelect,
  pillClassName,
  containerClassName,
  onEdit,
}) => {
  const createPill = () => {
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editLabel, setEditLabel] = useState<string>("");

    const handleEditClick = (index: number, label: string) => {
      setEditIndex(index);
      setEditLabel(label);
    };
  
    const handleEditSave = (index: number) => {
      if (onEdit) {
        onEdit(editLabel, index);
      }
      setEditIndex(null);
    };

    return data.map((value, index) => {
      const isEditing = editIndex === index;

      return (
        <div
          style={{ backgroundColor: value.bgcolor ? value.bgcolor : "#eee" }}
          key={index}
          className={`${rounded ? "rounded" : ""} ${
            pillClassName ? "pill" : ""
          } defaultPill`}
        >
          {isEditing ? (
            <input
              type="text"
              value={editLabel}
              onChange={(e) => setEditLabel(e.target.value)}
              onBlur={() => handleEditSave(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEditSave(index);
                }
              }}
              autoFocus
            />
          ) : (
            <button
              className="pillInnerWrapper"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                e.stopPropagation();
                onSelect && onSelect(e, index);
              }}
            >
              {value.icon && <span className="iconContainer">{value.icon}</span>}
              <span onDoubleClick={() => handleEditClick(index, value.label)}>
                {value.label}
              </span>
              {onClose && (
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
              )}
            </button>
          )}
        </div>
      );
    });
  };

  return <div className={containerClassName}>{createPill()}</div>;
};

export default Pill;
