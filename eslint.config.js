import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import globals from "globals";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

export default [
  ...compat.extends("eslint-config-airbnb-base"),
  {
    languageOptions: {
      ecmaVersion: 6,
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix']
    }
  }
]