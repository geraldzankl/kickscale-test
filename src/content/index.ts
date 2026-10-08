import { de } from "./de";
import { en } from "./en";
import type { Locale } from "./types";

export const locales: Locale[] = ["de", "en"];
export const dictionaries = { de, en };
export const getDictionary = (locale: Locale) => dictionaries[locale];
export type { Locale, Dictionary } from "./types";
