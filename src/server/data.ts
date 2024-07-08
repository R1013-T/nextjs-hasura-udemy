import { cache } from "react";
import { fetchSdk } from "~/lib/graphql";

export const getUsers = async () => {
  const res = await fetchSdk.GetUsers(
    {},
    {
      revalidate: 86400,
      tags: ["users"],
    }
  );

  return res;
};
