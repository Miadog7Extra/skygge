import { defineConfig } from "eslint-define-config";

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and shows Prettier errors as ESLint errors
  ],
  parser: "@typescript-eslint/parser", // Specifies ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Enables JSX
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error", // Ensures Prettier formatting is enforced
    "react/react-in-jsx-scope": "off", // React 17+ doesn't need React to be in scope
    "@typescript-eslint/explicit-module-boundary-types": "off", // Optional: Turn off TypeScript explicit return types
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
});
