import * as Yup from "yup";
import { SignUpMutationVariables } from "../../../../store/entities/user/type";

export const AuthSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please add valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export type UserType = SignUpMutationVariables;
export type { UserSignInType } from "../../../../store/entities/user/type";

export const initialValues: UserType = {
  user_name: "",
  email: "",
  password: "",
};
