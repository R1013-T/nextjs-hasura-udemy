
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://next15-graphql-learn.hasura.app/v1/graphql",
  documents: "queries/**/*.ts",
  generates: {
    "src/types/generated/gpl.tsx": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
