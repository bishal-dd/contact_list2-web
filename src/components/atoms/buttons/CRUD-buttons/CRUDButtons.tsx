import React from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

interface Props {
  icon: string;
  label?: string;
  background?: string;
  text_color: string;
}

const iconMap: Record<string, React.ReactNode> = {
  plus: <FaPlus />,
  edit: <FaEdit />,
  delete: <FaTrash />,
};

const CRUDButtons: React.FC<Props> = ({
  icon,
  label,
  background,
  text_color,
}) => {
  const selectedIcon = iconMap[icon] || null; // Fallback to null if the icon is not found
  return (
    <button
      className={`${text_color} py-2 px-4 rounded-md flex items-center ${background}`}
      type="submit"
    >
      <span className="mr-2">{selectedIcon}</span>
      <span>{label}</span>
    </button>
  );
};

export default CRUDButtons;
