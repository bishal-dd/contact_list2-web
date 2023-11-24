import React from "react";
import TextBox from "../../../atoms/text-boxes/TextBox";
import CRUDButtons from "../../../atoms/buttons/CRUD-buttons/CRUDButtons";
import Label from "../../../atoms/labels/Label";
import { Form, Formik } from "formik";
import { initialValues, AuthSchema, UserType } from "./util";

interface Props {
  label: string;
  signup: boolean;
  handelSubmit: (user: UserType) => void;
}

const AuthForm: React.FC<Props> = ({ label, signup, handelSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={AuthSchema}
      onSubmit={(values) => {
        console.log(values);
        handelSubmit({ ...values });
      }}
    >
      <Form>
        {signup ? (
          <div className="mb-4">
            <Label label="Name" id="user_name" />
            <TextBox name="user_name" />
          </div>
        ) : null}
        <div className="mb-4">
          <Label label="Email" id="email" />
          <TextBox name="email" />
        </div>
        <div className="mb-4">
          <Label label="Password" id="password" />
          <TextBox name="password" />
        </div>
        <CRUDButtons
          icon=""
          label={label}
          text_color="text-white"
          background="bg-blue-500"
        />
      </Form>
    </Formik>
  );
};

export default AuthForm;
