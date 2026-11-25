import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line = "I have 4,000 unread emails and I've decided they're not unread, they're just emails I emotionally ghosted.";

// The program writes this one line out exactly as-is, with nothing added or trimmed.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
