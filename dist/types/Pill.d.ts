import React from "react";
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
declare const Pill: React.FC<PillProps>;
export default Pill;
