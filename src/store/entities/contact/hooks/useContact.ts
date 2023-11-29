import { useRecoilCallback } from "recoil";
import { useUpsert } from "./useUpsert";
import { useGetAllContactQuery } from "../../../../graphql/types";

export const useContact = (userId: string) => {
  const { upsert } = useUpsert();

  const { refetch: getAllContactsRefetch } = useGetAllContactQuery({
    variables: {
      userId: userId, // Provide the actual userId value
    },
  });

  const setContact = useRecoilCallback(
    () => async () => {
      const { data, errors } = await getAllContactsRefetch();
      const res = data?.getAllContact;

      if (errors) {
        throw new Error(`${errors}`);
      } else {
        if (Array.isArray(res)) {
          // Iterate through the array and upsert each contact
          res.forEach((contact) => upsert({ ...contact }));
        } else {
          console.error("Unexpected data format:", data);
        }
      }
    },
    [upsert, getAllContactsRefetch, userId]
  );

  return {
    setContact,
  };
};
