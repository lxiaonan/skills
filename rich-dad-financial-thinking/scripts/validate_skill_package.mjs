import { existsSync, readFileSync } from "node:fs";

const required = [
  "SKILL.md",
  "references/core-principles.md",
  "references/frameworks.md",
  "references/decision-checklists.md",
  "references/examples.md",
  "references/risk-guardrails.md"
];

const missing = required.filter((path) => !existsSync(path));
if (missing.length) {
  console.error("Missing required files:", missing.join(", "));
  process.exit(1);
}

const skill = readFileSync("SKILL.md", "utf8");
if (!/^---\nname: .+\ndescription: .+\n---/s.test(skill)) {
  console.error("SKILL.md must start with name and description frontmatter.");
  process.exit(1);
}

console.log("Skill package structure looks valid.");
