🇬🇧 English | [🇭🇺 Magyar](README.hu.md)

# frontend-practicing

This repository is my frontend development practice space — a place to experiment with different technologies, libraries, and approaches in order to deepen my understanding and compare them side by side.

## Repository Purpose

Like its backend counterpart, this repo is intentionally a **sandbox**. Each branch represents a separate learning track, focused on mastering a specific frontend technology or exercise set in isolation.

## Branch Structure

There are currently **five active branches**:

### `react-js`

React practice — components, hooks, state management, and general React fundamentals, built outside of any specific project context.

### `react-native`

React Native practice — building mobile UI with React, exploring navigation, native components, and the differences compared to web-based React development.

### `html-css-ts`

Practice combining plain HTML and CSS with TypeScript — no framework, focused on strongly-typed DOM manipulation and structuring vanilla frontend code with TypeScript.

### `html-css-js`

Practice with plain HTML, CSS, and JavaScript — no framework, no TypeScript. Focused on core web fundamentals: DOM manipulation, styling, and vanilla JS logic.

### `web-tech-exercise`

Exercises from the **Web Technologies** university course — coursework and assignments completed as part of my studies, covering foundational web development topics.

## Switching Between Branches

```bash
# List all branches
git branch -a

# Switch to a specific branch
git checkout react-js
git checkout react-native
git checkout html-css-ts
git checkout html-css-js
git checkout web-tech-exercise

# Pull down a branch that doesn't exist locally yet
git fetch origin
git checkout -b react-native origin/react-native
```

Since these branches represent independent practice tracks (and are not meant to be merged into one another), it's a good idea to run `git status` before switching, to make sure you're starting from a clean working directory.

## Notes

- Each branch is self-contained — code, dependencies, and structure differ intentionally between them.
- Commit history within each branch reflects incremental learning steps rather than a single coherent feature roadmap.
- This repo will likely grow over time as new technologies or exercises are added as new branches.

## License

Personal/educational project — not currently licensed for reuse.
