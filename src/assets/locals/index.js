import translationEN from "./en/translation.json";
import translationAR from "./ar/translation.json";

export const resources = {
  en: {
    translation: translationEN,
    label: "Eng",
  },
  ar: {
    translation: translationAR,
    label: "Ar",
  },
};

export const languages = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "ar",
    label: "العربية",
  },
];
