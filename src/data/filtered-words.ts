import { allWords } from "./all-words";

export const bigWords = allWords.filter(
  (item) => item.length > 22 && !item.includes("-")
);
export const filteredWords = allWords.filter(
  (item) => item.length > 2 && !item.includes("-")
);
