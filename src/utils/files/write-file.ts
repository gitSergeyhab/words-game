import fs from 'fs';
import path from 'path';

export const writeListToJsFile = <T>(list:Array<T>, outputFileName = 'all-words.ts') => {
  const outputPath = path.join(process.cwd(), outputFileName);

  // Преобразуем массив в строку в формате JavaScript
  const fileContent = `export const list = ${JSON.stringify(list, null, 2)};`;

  try {
    fs.writeFileSync(outputPath, fileContent, 'utf8');
    console.log(`Файл успешно записан: ${outputPath}`);
  } catch (error) {
    console.error('Ошибка при записи файла:', error);
  }
};
