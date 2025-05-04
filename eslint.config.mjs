import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off", // Отключаем использование <img> для изображений
      "react/no-unescaped-entities": "off", // Отключаем правило для символов (например, апострофов) в строках
      "@typescript-eslint/no-unused-vars": "off", // Отключаем правило для неиспользуемых переменных
      "@typescript-eslint/no-explicit-any": "off", // Отключаем правило для типа `any`
      "react-hooks/exhaustive-deps": "off", // Отключаем предупреждения о зависимостях в useEffect
      "react-redux/prefer-typed-dispatch": "off", // Отключаем правило, требующее типизацию dispatch
    },
  },
];

export default eslintConfig;
