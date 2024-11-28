import { bigWords, filteredWords, list } from "@/data/all-words";
import { readDictFile } from "@/utils/files/read-file";
import { writeListToJsFile } from "@/utils/files/write-file";
import { getValidCombinations } from "@/utils/wotds/find-words-in-word";

// let url = "https://www.wikidata.org/w/api.php?";

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

const getAllData = () => {
    const result: Record<string, string[]> = {}

    for (const bw of bigWords) {
        result[bw] = getValidCombinations(bw, filteredWords)
        console.log(bw, result[bw].length)
    }

    return result;
}


export default async function Dictionary() {
//   const list = readDictFile()
//   writeListToJsFile(list)
// const lengths = getWordLength(list)
//   console.log({lengths})

// const longList = list.filter(item => item.length >15).sort(() => 0.5 - Math.random())
// console.log({longList}, longList.length)
// const words =  getValidCombinations('звукоулавливатель', list);
// console.log(words)

// console.log('list.length', list.length, '  /' )
// console.log('list.length15', list.filter(item => item.length >15).length, '  /' )
// console.log('bigWords.length', bigWords.length, '  /' )
// console.log('filteredWords.length', filteredWords.length, '  /' )
console.log('start')
const data = getAllData()
console.log({data} )
console.log('end')




//   получившийся результат проверяем по массиву реально существующих 

    return (
        <div>
            <h1>Dictionary</h1>
        </div>
    );
}