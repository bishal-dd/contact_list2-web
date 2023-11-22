import React from "react";
import CRUDButtons from "../../atoms/buttons/CRUD-buttons/CRUDButtons";

interface Props {
  background: string;
  text_color: string;
}

const Table: React.FC<Props> = ({ background, text_color }) => {
  return (
    <div className="container mx-auto py-5">
      <div className="overflow-x-auto shadow-lg">
        <table className="min-w-full border border-gray-300 shadow-lg">
          <thead>
            <tr className={`${background} ${text_color}`}>
              <th className="border-r border-b-2 border-gray-300 text-left p-3">
                Sl. No
              </th>
              <th className="border-r border-b-2 border-gray-300 text-left p-3">
                Name
              </th>
              <th className="border-r border-b-2 border-gray-300 text-left p-3">
                Email
              </th>
              <th className="border-r border-b-2 border-gray-300 text-left p-3">
                Phone
              </th>
              <th className="border-r border-b-2 border-gray-300 text-left p-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r border-b border-gray-300 py-2 p-3">1</td>
              <td className="border-r border-b border-gray-300 py-2 p-3"></td>
              <td className="border-r border-b border-gray-300 py-2 p-3"></td>
              <td className="border-r border-b border-gray-300 py-2 p-3">d</td>
              <td className="border-r border-b border-gray-300 py-2 p-3">
                <div className="flex">
                  <CRUDButtons icon="edit" text_color="text-blue-500" />
                  <CRUDButtons icon="delete" text_color="text-red-500" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
