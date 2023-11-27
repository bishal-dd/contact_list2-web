import { Contact } from "./type";
import { selectorFamily } from "recoil";
import { createState } from "../../util/createState";

const key = (str: string) => `src/store/entities/contact/${str}`;

export const initialState = (): Contact => ({
  id: "",
  contact_name: "",
  contact_number: 0,
  contact_email: "",
  userId: "",
  __typename: "Contact",
});

export const { state: contactState, listState: contactsState } = createState({
  key,
  initialState,
});

export const ContactByUserIdState = selectorFamily<Contact[], string>({
  key: key("ContactByUserIdState"),
  get:
    (userId) =>
    ({ get }) => {
      const contact = get(contactsState);
      return contact.filter((contact) => contact.id === userId);
    },
});
