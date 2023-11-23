import type { ContactResponse } from "../../../graphql/types/contact";

export type {
  CreateContactMutation,
  DeleteContactMutation,
  UpdateContactMutation,
  GetAllContactQuery,
  ContactResponse,
} from "../../../graphql/types/contact";

export type Contact = ContactResponse;
