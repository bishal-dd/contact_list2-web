import React from "react";
import Label from "../../../atoms/labels/Label";
import TextBox from "../../../atoms/text-boxes/TextBox";
import CRUDButtons from "../../../atoms/buttons/CRUD-buttons/CRUDButtons";
import { Form, Formik } from "formik";
import { ContactSchema, ContactType, initialValues } from "./util";

interface Props {
  label: string;
  icon: string;
  handleSubmit: (contact: ContactType) => void;
}

const CUForm: React.FC<Props> = ({ label, icon, handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={(values) => {
        handleSubmit({ ...values });
      }}
    >
      <Form>
        <div className="mb-4">
          <Label label="Name:" id="contact_name" />
          <TextBox name="contact_name" type="text" />
        </div>
        <div className="mb-4">
          <Label label=" Email:" id="contact_email" />
          <TextBox name="contact_email" type="email" />
        </div>
        <div className="mb-4">
          <Label label=" Phone:" id="contact_number" />
          <TextBox name="contact_number" type="number" />
        </div>
        <CRUDButtons
          icon={icon}
          label={label}
          background="bg-blue-500"
          text_color="text-white"
        />
      </Form>
    </Formik>
  );
};

export default CUForm;
