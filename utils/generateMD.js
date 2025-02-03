import fs from "fs/promises";
import Papa from "papaparse";
import path from "path";

function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function processImages(imageUrls) {
  if (!imageUrls) return [];
  return imageUrls
    .split(";")
    .map((url) => url.trim())
    .map((url) => url.split("/").pop());
}

async function generateMarkdownFiles() {
  const fileContent = await fs.readFile("form.csv", "utf8");

  const parsedData = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  await fs.mkdir("markdown", { recursive: true });

  for (const entry of parsedData.data) {
    const slug = generateSlug(entry["Typeface Name"]);
    const images = processImages(
      entry["Images of your typeface and/or building"]
    );
    const hasFont = !!entry["Typeface File Upload"];

    const markdown = `---
title: ${entry["Typeface Name"]}
class: ${slug}
author: ${entry["Designers Preferred Name"]}
year: 1
slug: ${slug}
font: ${hasFont}
cover: "${images[0]}"
---

${entry["Typeface Description"]}

${images.map((img) => `![](/images/${img})`).join("\n")}`;

    await fs.writeFile(path.join("markdown", `${slug}.md`), markdown);
  }

  console.log(
    `Generated ${parsedData.data.length} markdown files in /markdown directory`
  );
}

generateMarkdownFiles().catch(console.error);
