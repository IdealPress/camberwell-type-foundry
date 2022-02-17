const fs = require("fs");
const path = require("path");

const FILES_PATH = path.join(process.cwd(), "public", "typefaces");
const STYLES_PATH = path.join(process.cwd(), "styles");

const filePaths = fs.readdirSync(FILES_PATH);

let str = filePaths
  .map((file) => {
    const name = path.parse(file).name;
    return `
@font-face {
  font-family: "${name}";
  src: url("/typefaces/${file}")
}
.${name} {
  font-family: "${name}";
}
  `;
  })
  .join("");

try {
  fs.writeFileSync(STYLES_PATH + "/fonts.css", str);
  //file written successfully
} catch (err) {
  console.error(err);
}
