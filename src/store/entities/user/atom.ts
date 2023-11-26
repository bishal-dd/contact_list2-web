import { CurrentUser } from "./type";
import { createState } from "../../util/createState";

const key = (str: string) => `src/store/entities/contact/${str}`;

export const initialState = (): CurrentUser => ({
  id: "",
  userId: "",
  user_name: "",
  email: "",
});

export const { state: userState } = createState({
  key,
  initialState,
});
