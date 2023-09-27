import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import English from "./languages/en.json";
import Hindi from "./languages/hi.json";
import Chinese from "./languages/ch.json";
import Spanish from "./languages/sp.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: English,
      },
      hi: {
        translation: Hindi,
      },
      ch: {
        translation: Chinese,
      },
      sp: {
        translation: Spanish,
      },
    },
    fallbackLng: "en", // Default language
    detection: {
      order: ["navigator",'path','subdomail','htmlTag'],
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
