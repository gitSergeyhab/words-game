import { allWords } from "@/data/all-words";
import fs from "fs";
import path from "path";
import { getValidCombinations } from "../words/find-words-in-word";
import { filteredWords } from "@/data/filtered-words";

export const writeListToJsFile = <T>(
  list: Array<T>,
  outputFileName = "all-words.ts"
) => {
  const outputPath = path.join(process.cwd(), outputFileName);
  const fileContent = `export const list = ${JSON.stringify(list, null, 2)};`;

  try {
    fs.writeFileSync(outputPath, fileContent, "utf8");
    console.log(`Файл успешно записан: ${outputPath}`);
  } catch (error) {
    console.error("Ошибка при записи файла:", error);
  }
};

export const writeListToJsFileByKey = (
  dict: Record<string, Array<string>>,
  firstLetter: string
) => {
  const filename = `list-${firstLetter}.ts`;
  const outputPath = path.join(
    process.cwd(),
    "src",
    "data",
    // "alphabet",
    "lengths",
    filename
  );
  const fileContent = `export const wordsDict_${firstLetter} = ${JSON.stringify(
    dict,
    null,
    2
  )};`;

  try {
    fs.writeFileSync(outputPath, fileContent, "utf8");
    console.log(`Файл успешно записан: ${outputPath}`);
  } catch (error) {
    console.error("Ошибка при записи файла:", error);
  }
};

// const getWordDictByFirstLetterAndWord = (dict: Record<string, Array<string>>) =>
//   Object.entries(dict).reduce((acc, [key, value]) => {
//     const firstLetter = key[0];
//     if (firstLetter in acc) {
//       acc[firstLetter][key] = value;
//     } else {
//       acc[firstLetter] = { [key]: value };
//     }
//     return acc;
//   }, {} as Record<string, Record<string, Array<string>>>);
// const getWordDictByFirstLenAndWord = (dict: Record<string, Array<string>>) =>
//   Object.entries(dict).reduce((acc, [key, value]) => {
//     const len = value.length;
//     if (len in acc) {
//       acc[len][key] = value;
//     } else {
//       acc[len] = { [key]: value };
//     }
//     return acc;
//   }, {} as Record<string, Record<string, Array<string>>>);

// export const writeListToJsFilesByAlphabet = (
//   dict: Record<string, Array<string>>
// ) => {
//   const dictByFirstLetterAndWord = getWordDictByFirstLenAndWord(dict);
//   Object.entries(dictByFirstLetterAndWord).forEach(([key, words]) => {
//     writeListToJsFileByKey(words, key);
//   });
// };

export const writeListToJsFile2 = <T>(
  dict: Array<T>,
  outputFileName: string
) => {
  const outputPath = path.join(process.cwd(), outputFileName);
  const fileContent = `export const wordsFromWords = ${JSON.stringify(
    dict,
    null,
    2
  )};`;
  try {
    fs.writeFileSync(outputPath, fileContent, "utf8");
    console.log(`Файл успешно записан: ${outputPath}`);
  } catch (error) {
    console.error("Ошибка при записи файла:", error);
  }
};

const words10_11 = allWords
  .filter((item) => item.length > 9 && item.length < 13)
  .sort(() => 0.5 - Math.random());
export const writeData = () => {
  console.log("start");
  const result = [];

  for (const origin of words10_11) {
    const words = getValidCombinations(origin, filteredWords);
    const len = words.length;
    if (len > 35 && len < 64) {
      result.push({ origin, words: words.filter((item) => item !== origin) });
      console.log(origin, result.length);
    }

    //   return result;
  }
  console.log("end");
  writeListToJsFile2(result, "words-from-words.ts");
};
