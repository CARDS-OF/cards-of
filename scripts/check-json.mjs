import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

const files = [
  ...globSync("schemas/**/*.json"),
  ...globSync("fixtures/**/*.json")
];

for (const file of files) {
  JSON.parse(readFileSync(file, "utf8"));
  console.log(`ok ${file}`);
}

console.log(`checked ${files.length} JSON files`);

