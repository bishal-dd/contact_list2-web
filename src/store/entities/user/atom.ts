import { User } from "./type";
import { createState } from "../../util/createState";

const key = (str: string) => `src/store/entities/contact/${str}`;

export const initialState = (): User => ({
  id: "",
  user_name: "",
  email: "",
});

export const { state: userState } = createState({
  key,
  initialState,
});
