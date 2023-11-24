import * as Yup from "yup";
import { SignUpMutationVariables } from "../../../../store/entities/user/type";

export const AuthSchema = Yup.object().shape({
  user_name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please add valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export type UserType = SignUpMutationVariables;

export const initialValues: UserType = {
  user_name: "",
  email: "",
  password: "",
};
