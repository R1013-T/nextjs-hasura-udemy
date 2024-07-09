"use server";

import { GraphQLClient } from "graphql-request";
import { revalidateTag } from "next/cache";
import {
  CreateUserDocument,
  CreateUserMutation,
} from "~/types/__generated__/graphql";
import { CreateUserMutationVariables } from "~/types/__generated__/graphql";

const endpoint = "https://next15-graphql-learn.hasura.app/v1/graphql";
const apiClient = new GraphQLClient(endpoint);

export const createUser = async (data: CreateUserMutationVariables) => {
  const response = await apiClient.request<CreateUserMutation>(
    CreateUserDocument,
    data
  );

  const { insert_users_one: user } = response;

  revalidateTag("users");

  console.log("User created", user);
};
