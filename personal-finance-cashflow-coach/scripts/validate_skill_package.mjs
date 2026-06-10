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

const requiredSections = [
  "Core Mode",
  "Trigger Fit",
  "Response Protocol",
  "Missing Information",
  "Reference Loading",
  "Guardrails",
  "Output Quality Check"
];
const missingSections = requiredSections.filter((section) => !skill.includes(section));
if (missingSections.length) {
  console.error("SKILL.md is missing operational sections:", missingSections.join(", "));
  process.exit(1);
}

for (const path of required.slice(1)) {
  const content = readFileSync(path, "utf8").trim();
  if (content.length < 300) {
    console.error(path + " looks too thin to be useful.");
    process.exit(1);
  }
}

console.log("Skill package structure and operating protocol look valid.");
