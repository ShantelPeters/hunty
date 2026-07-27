import nextConfig from "@hunty/config/eslint/next";
import jsxA11y from "eslint-plugin-jsx-a11y";

const eslintConfig = [
  ...nextConfig,
  {
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      "no-console": "error",
      "jsx-a11y/control-has-associated-label": "error",
      "jsx-a11y/interactive-supports-focus": "error",
    },
  },
  {
    files: [
      "**/__tests__/**",
      "**/*.test.{ts,tsx}",
      "**/*.spec.{ts,tsx}",
      "e2e/**",
      "scripts/**",
    ],
    rules: {
      "no-console": "off",
    },
  },
];

export default eslintConfig;
