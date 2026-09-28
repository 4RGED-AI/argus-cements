import type { Linter } from "eslint";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig: Linter.Config[] = [...compat.extends("next/core-web-vitals", "next/typescript")];

export default eslintConfig;
