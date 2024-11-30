// let url = "https://www.wikidata.org/w/api.php?";

import { wordsFromWords } from "@/data/words-from-words";
import { writeData, writeListToJsFile2 } from "@/utils/files/write-file";
import { need } from "../../../origin-words";

// const fetchWord = async (word: string) => {
//     const params: { [key: string]: string } = {
//         action: "wbsearchentities",
//         search: word,
//         format: "json",
//         language: "ru",
//         uselang: "ru"
//       };

//       // url += "?origin=*";
//       Object.keys(params).forEach(function (key) {
//         url += `&${key}=${params[key]}`;
//       });

//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         // console.log(data);
//         console.log(data.search[0].description);
//       } catch (error) {
//         console.error(error);
//       }

// }

// const getWordLength = (words: string[]) => words.reduce((acc, item) => {
//     const length = item.length;
//     if (acc[length]) {
//         acc[length]++
//     } else {
//         acc[length]=1
//     }
//     return acc
// }, {} as Record<string, number>)

// const getWordInWord = (words: string[]) =>

export default async function Dictionary() {
  // const words = wordsFromWords.map((item) => item.origin);
  // writeListToJsFile2(words, "origin-words.ts");

  // writeData();
  const response = await fetch("http://localhost:3000/api/level/5");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>Dictionary</h1>
    </div>
  );
}
