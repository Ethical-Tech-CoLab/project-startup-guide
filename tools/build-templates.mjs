// Embeds the repository's templates, prompts and example config files into
// docs/index.html so the published dashboard can offer copy/download without
// a second copy of the content drifting out of date.
//
// Run it after editing anything in templates/, prompts/ or examples/:
//   node tools/build-templates.mjs

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboard = path.join(root, "docs", "index.html");

const PATTERN =
  /(<script type="text\/markdown"[^>]*data-src="([^"]+)"[^>]*>)([\s\S]*?)(<\/script>)/g;

const html = await readFile(dashboard, "utf8");

const sources = [...html.matchAll(PATTERN)].map((match) => match[2]);
const contents = new Map();

for (const source of sources) {
  const text = await readFile(path.join(root, source), "utf8");
  if (text.includes("</script")) {
    throw new Error(`${source} contains "</script" and cannot be embedded safely.`);
  }
  contents.set(source, text.replace(/\r\n/g, "\n").trimEnd());
}

const updated = html.replace(
  PATTERN,
  (_match, open, source, _body, close) => `${open}\n${contents.get(source)}\n${close}`
);

await writeFile(dashboard, updated, "utf8");

console.log(`Embedded ${sources.length} files into docs/index.html:`);
for (const source of sources) {
  console.log(`  - ${source} (${contents.get(source).length} chars)`);
}
