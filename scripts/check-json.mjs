import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

// This repo is abstract class design space only -- schemas, no instance
// data. There is deliberately no fixtures/** glob here: if one reappears,
// that's an instance-data leak into an abstract-class repo, not a valid
// thing for this script to accommodate. Real per-identity data belongs in
// its own cards-of/<haecceity> repo.
const files = globSync("schemas/**/*.json");

for (const file of files) {
  JSON.parse(readFileSync(file, "utf8"));
  console.log(`ok ${file}`);
}

console.log(`checked ${files.length} JSON files`);

