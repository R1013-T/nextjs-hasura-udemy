import { print } from "graphql";
import { GraphQLClient } from "graphql-request";
import { getSdk, Requester } from "~/types/__generated__/graphql";

interface RequestOptions {
  headers?: Record<string, string>;
  revalidate: false | number;
  tags?: string[];
}

const requester: Requester<RequestOptions> = async (
  doc,
  variables,
  options?
) => {
  const headers = {
    "Content-Type": "application/json",
    ...options?.headers,
  };
  const revalidate = options?.revalidate ?? 0;
  const tags = options?.tags ?? [];

  try {
    const response = await fetch(
      "https://next15-graphql-learn.hasura.app/v1/graphql",
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          query: print(doc),
          variables,
        }),
        next: {
          revalidate,
          tags,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Network response was not ok  ${response.status} ${response.statusText}`
      );
    }

    const data = (await response.json()).data;
    return data;
  } catch (error) {
    console.error("Request failed", error);
    throw error;
  }
};

export const fetchSdk = getSdk(requester);
