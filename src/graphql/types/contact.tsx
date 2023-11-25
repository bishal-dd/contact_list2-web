import { ContactFragmentFragment } from ".";

export type ContactResponse = NonNullable<ContactFragmentFragment>;
export type {
  CreateContactMutation,
  DeleteContactMutation,
  UpdateContactMutation,
  GetAllContactQuery,
  CreateContactMutationVariables,
} from ".";
