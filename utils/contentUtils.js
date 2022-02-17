import fs from "fs";
import path from "path";
import * as matter from "gray-matter";

export const CONTENT_PATH = path.join(process.cwd(), "content");

const walkSync = (currentDirPath, callback) => {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    var filePath = path.join(currentDirPath, name);
    var stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
};

const tempAllFilePaths = [];

walkSync(CONTENT_PATH, function (filePath, stat) {
  tempAllFilePaths.push(filePath);
});

export const allFilePaths = tempAllFilePaths;

const getFiles = (filePaths) =>
  filePaths.map((filePath) => {
    const { content, data } = matter(fs.readFileSync(filePath, "utf8"));
    const dirname = path.basename(path.dirname(filePath));
    return {
      content,
      data,
      path: filePath,
      folder: dirname,
    };
  });

const allFiles = getFiles(allFilePaths);

export const data = [...new Set(allFiles.map((item) => item.folder))].reduce(
  (prev, current) => ({
    ...prev,
    [current]: allFiles.filter((item) => item.folder === current),
  }),
  {}
);

export const directories = fs
  .readdirSync(CONTENT_PATH, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);
