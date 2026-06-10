import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir = ".", prefix = "") {
  for (const name of readdirSync(dir).filter((item) => item !== "node_modules").sort()) {
    const path = join(dir, name);
    console.log(prefix + name + (statSync(path).isDirectory() ? "/" : ""));
    if (statSync(path).isDirectory()) walk(path, prefix + "  ");
  }
}

walk();
