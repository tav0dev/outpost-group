import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

export default [
  // ignorar pastas geradas
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
    ],
  },

  // base JS recomendado
  js.configs.recommended,

  // regras do Next (core-web-vitals)
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // Jest (para arquivos de teste)
  {
    files: ["**/*.test.*", "**/*.spec.*", "tests/**"],
    plugins: { jest },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },

  // ambiente geral (node + browser)
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];
