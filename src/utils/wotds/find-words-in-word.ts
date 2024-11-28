export function getValidCombinations(word: string, originWords: string[]) {
    const results = new Set();
    const validWords = new Set(originWords); // Для быстрого поиска O(1)
  
    function backtrack(current: string[], start: number) {
      if (current.length >= 3) {
        const combination = current.join('');
        if (validWords.has(combination)) {
          results.add(combination);
        }
      }
  
      for (let i = start; i < word.length; i++) {
        current.push(word[i]); // Добавляем букву
        backtrack(current, i + 1); // Рекурсивно продолжаем
        current.pop(); // Откат
      }
    }
  
    backtrack([], 0); // Начинаем с пустой комбинации
    return (Array.from(results) as string[]).sort(); // Возвращаем отсортированный список
  }
  
//   const word = "город";
//   const validWords = ["город", "гор", "род", "грод", "дор", "рог", "родо", "гром"];
//   console.log(getValidCombinations(word, validWords));
  