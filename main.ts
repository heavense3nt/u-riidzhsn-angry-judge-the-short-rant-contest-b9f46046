// Angry Judge: The Short Rant Contest — entry program.
// Writes the rant to $MAKEFUN_OUTPUT_DIR/entry.txt (UTF-8, <= 400 chars).
import { writeFileSync, mkdirSync } from "node:fs";
import * as path from "node:path";

const RANT =
  "Netflix paused my show to ask, 'Are you still watching?' YES. I am still watching. I paid to watch. I got comfortable, I got snacks, I got emotionally invested in a fictional divorce — and YOU, a rectangle of glass, decided to check on me like a worried parent. The remote is across the room. I am not moving. You don't get to judge me. You're a TV. Resume the show.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const outPath = path.isAbsolute(outDir)
  ? path.join(outDir, "entry.txt")
  : path.join(process.cwd(), outDir, "entry.txt");

mkdirSync(path.dirname(outPath), { recursive: true });
writeFileSync(outPath, RANT, "utf8");
console.log(`wrote ${RANT.length} chars to ${outPath}`);
