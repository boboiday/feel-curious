// feel-curious — make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt: a small scene built to
// leave the reader curious. No network, deterministic, byte-identical
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = [
  "At three in the morning, Tomas kneads the rye.",
  "The ovens breathe.",
  "On the counter, beside his loaf,",
  "a pair of small floury handprints.",
  "Not his. Too small, dusted white.",
  "He does not wipe them away.",
  "He leaves the oven light on, and one warm roll,",
  "for whoever bakes beside him.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
