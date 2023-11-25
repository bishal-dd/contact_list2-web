import * as Yup from "yup";
import { CreateContactMutationVariables } from "../../../../store/entities/contact/type";

export const ContactSchema = Yup.object().shape({
  contact_name: Yup.string().required("Name is required"),
  contact_email: Yup.string()
    .email("Please add valid email")
    .required("Email is required"),
  contact_number: Yup.number().required("Number is required"),
});

export type ContactType = CreateContactMutationVariables;

export const initialValues: ContactType = {
  contact_name: "",
  contact_email: "",
  contact_number: 0,
  userId: "",
};
