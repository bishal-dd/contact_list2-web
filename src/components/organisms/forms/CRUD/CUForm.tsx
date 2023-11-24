import React from "react";
import Label from "../../../atoms/labels/Label";
import TextBox from "../../../atoms/text-boxes/TextBox";
import CRUDButtons from "../../../atoms/buttons/CRUD-buttons/CRUDButtons";

interface Props {
  label: string;
  icon: string;
}

const CUForm: React.FC<Props> = ({ label, icon }) => {
  return (
    <form>
      <div className="mb-4">
        <Label label="Name:" id="contact_name" />
        <TextBox name="contact_name" />
      </div>
      <div className="mb-4">
        <Label label=" Email:" id="contact_email" />
        <TextBox name="contact_email" />
      </div>
      <div className="mb-4">
        <Label label=" Phone:" id="contact_number" />
        <TextBox name="contact_number" />
      </div>
      <CRUDButtons
        icon={icon}
        label={label}
        background="bg-blue-500"
        text_color="text-white"
      />
    </form>
  );
};

export default CUForm;
