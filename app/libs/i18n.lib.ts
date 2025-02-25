import i18n from "i18next";
import LanguageDetectorModule from "i18next-browser-languagedetector";
import { messages } from "../lang/lang";
i18n.use(LanguageDetectorModule).init({
  debug: false,
  defaultNS: ["translations"],
  fallbackLng: "en",
  ns: ["translations"],
  resources: messages,
});

export { i18n as trans };
