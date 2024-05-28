import path from 'path';
import fs from 'fs/promises';
import { glob } from 'glob';

interface FileOps {
  contentDirPath: string;
  pattern: string;
}

export const getFiles = ({ contentDirPath, pattern }: FileOps) => {
  const dirPath = path.join(process.cwd(), contentDirPath);
  const paths = glob.sync(`${dirPath}/${pattern}`);

  return paths.map(file => {
    const filePath = file.replace(`${dirPath}/`, '');
    const fileSplit = filePath.split('/');
    const fileName = fileSplit[fileSplit.length - 1];
    const fileDir = fileSplit.slice(0, fileSplit.length - 1).join('/');

    return {
      filePath,
      fileDir,
      fileName
    };
  });
};

export const getFile = async (filePath: string) => {
  const localFilePath = path.join(process.cwd(), filePath);
  const file = await fs.readFile(localFilePath);
  return file;
};
