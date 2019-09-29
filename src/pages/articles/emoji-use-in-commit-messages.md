---
title: "\U0001F914 Why I use emoji in my commit messages"
description: >-
  Using a rigid commit format with emoji means I limit myself to a commit per
  ‘thing’, it also allows me to parse my commits quickly.
path: /emoji-use-in-commit-messages
template: article
tags: 'code, emoji, git, commit'
---
This article is outdated, [I now much prefer Conventional Commits](/conventional-commits)

---

TL;DR: Using a rigid commit format with emoji means I limit myself to a commit per ‘thing’, it also allows me to parse my commits quickly.

## What’s in a commit?

Everybody has had that sinking feeling of losing minutes, hours or days worth of work due to forgetting to save, as a hangover from this I find myself constantly committing changes to effectively ‘save the state’.

Because of this my projects usually end up with hundreds if not thousands of commit messages, I need a way to quickly parse what the commit messages relate to.

Expanding on Sparkbox's original idea for the case of [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages)  I am forcing myself to a rigid commit format and replacing ‘type’ with a specific ‘emoji’.

## What does this look like?

```bash
$ git log --pretty=format:"%h - %s"

6b3b372 - ⚙️ Resolves #18 : Added robots.txt file
eb96af8 - ⚙️ Resolves #21 : Added hsts header for preloading
54e4159 - ⚙️ #20 : Added gatsby netlify cms plugin for default security headers
6b4006a - ⚙️ Resolves #17 : Added sitemap plugin
59098a9 - ✨ Resolves #15 : Added link to edit article in footer
8710216 - 🐛 Inline block article list bug on larger screens
3df3309 - 💅 Resolves #14 : Added link style with some animation
feafa8f - ✨ Resolves #7 : Added new tag component, articles now have headers showing the tags
```

/Commit log for this site at the time of writing/

## What emojis have you been using?

Personally I like:

```
⚙️ - Anything build / settings related
✨ - New feature
🐛 - Bug fix
💅 - Styling or display change
🛂 - Testing related
🌏 - SEO Related
📝 - Updating content
🗑 - Removing things
🔨 - Dependency related
```

The format that [gitmoji](https://gitmoji.carloscuesta.me) uses as it’s defined well, it also comes with [a CLI](https://github.com/carloscuesta/gitmoji-cli)  to get up and running quickly.

If you’d like to use your own emoji style you can use:

* ‘Emoji keyboards’
	* Windows `WIN + .`
	* Mac `CONTROL+OPTION+SPACE`
* A [Commitizen](https://github.com/commitizen/cz-cli) script
	* Also gives the added bonus of enabling ‘smart commits’

Whatever your format is it doesn’t matter as long as it’s uniform.

## References
* [Which Emojis Does Lucy Use in Commit Messages?](http://seankross.com/2017/05/30/Which-Emojis-Does-Lucy-Use-in-Commit-Messages.html)
* [Semantic Commit Messages with Emojis ](https://medium.com/walmartlabs/semantic-commit-messages-with-emojis-dba2541cea9a)
* [gitmoji | An emoji guide for your commit messages](https://gitmoji.carloscuesta.me)
* https://github.com/carloscuesta/gitmoji-cli
