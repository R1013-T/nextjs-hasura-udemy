import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://next15-graphql-learn.hasura.app/v1/graphql",
  documents: ["src/lib/**/*.graphql"],
  ignoreNoDocuments: false,
  generates: {
    "src/types/__generated__/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-generic-sdk",
      ],
    },
  },
};

export default config;
