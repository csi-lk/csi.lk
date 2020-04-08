---
title: "\U0001F333 Conventional Commits"
description: >-
  Conventional commits seems to be the way forward as it's an easy set of rules
  to remember that results in a far more structured commit history.
permalink: articles/conventional-commits.html
tags: article
keywords: conventional, commits, commitizen, quick, reference, committing, git
layout: article
---

[Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) seems to be the way forward as it's an easy set of rules to remember that results in a far more structured commit history.

## Preferred Method

All commits require a `type`, `scope`, `description`, long form descriptive `body` and a ticket reference eg. `#1234`

They should be structured as follows:

```bash
feat(scope): I made a change

BREAKING CHANGE: This is a description of the change i've made

#1234
```

## Quick reference

| scope    | semver  | description                                                          |
| -------- | ------- | -------------------------------------------------------------------- |
| feat     | `MINOR` | a new feature                                                        |
| fix      | `PATCH` | a bug fix ()                                                         |
| docs     | none    | documentation only changes                                           |
| style    | none    | changes that do not affect the meaning of the code (formatting etc.) |
| refactor | none    | neither fixes a bug or adds a feature                                |
| perf     | none    | code change that improves performance                                |
| test     | none    | add or update existing tests only                                    |
| build    | none    | affecting build system                                               |
| chore    | none    | changes that do not modify source or test                            |
| revert   | none    | revert previous commit                                               |

Adding `BREAKING CHANGE` to the body of the commit message will cause a `MAJOR` bump

## Tools

[Commitizen](https://github.com/commitizen/cz-cli) gives you a Q&A approach to committing, usually have it setup with:

```bash
yarn commit
```

Automagic [SemVer](https://semver.org/) as it works with Lerna to [generate changelogs](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli) and [determine version bumps](https://github.com/lerna/lerna/tree/master/commands/version#--conventional-commits)
