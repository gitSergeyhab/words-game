import fs from 'fs';
import path from 'path';

export const readDictFile = () => {
  const filePath = path.join( process.cwd(), 'russian_nouns.txt');
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const list = fileContent.split('\r\n');
    return list;
  } catch (error) {
    console.error(error);
    return []
  }
}