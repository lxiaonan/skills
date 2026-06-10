# Refinery Report

## Skill

- Name: personal-finance-cashflow-coach
- Generated files from model: 6
- Package includes normalized required references and utility scripts.

## What This Package Is

This is a Codex Skill package. The repeated file names under references/ are intentional: they are stable slots that let Codex load the right kind of supporting material when needed.

## Reference File Roles

- core-principles.md: reusable domain principles distilled from the material.
- frameworks.md: step-by-step workflows, decision models, or operating procedures.
- decision-checklists.md: intake questions, checks, and missing-context prompts.
- examples.md: realistic user questions and response patterns.
- risk-guardrails.md: misuse boundaries, uncertainty notes, and escalation guidance.

## Coverage Note

The refinery uses extracted text sent to the model during the task. If the source is larger than the single-pass limit, it is processed in chunks and synthesized from coverage notes. Review generated references and rerun with focused excerpts if important sections are missing.

## How To Tell The Skill Is Being Used

A good answer should visibly follow SKILL.md's Response Protocol, ask for missing information before strong claims, apply at least one framework from references/, mention assumptions or guardrails, and end with a concrete next action. If the answer is only generic advice or trivia about the source, the skill needs more refinement.
