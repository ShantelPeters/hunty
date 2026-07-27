import baseConfig from "./packages/config/eslint/base.mjs";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const isProduction = process.env.NODE_ENV === "production";

const eslintConfig = [
  ...baseConfig,
  {
    plugins: {
      "jsx-a11y": jsxA11y,
      "simple-import-sort": simpleImportSort,
      "react-hooks": reactHooks,
    },
    rules: {
      "no-console": isProduction ? ["error", { allow: ["warn", "error"] }] : "warn",
      "jsx-a11y/control-has-associated-label": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-explicit-any": "error",
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.test.*", "**/*.spec.*", "**/__tests__/**/*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
