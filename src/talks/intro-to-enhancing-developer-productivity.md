---
title: Introduction on enhancing developer productivity
description: A talk to convince you to spend an hour a week on enhancing your productivity
permalink: talks/intro-to-enhancing-developer-productivity.html
date: 2023-11-21
tags: talk
layout: talk
keywords: developer, productivity, git, aliases coding, with, callum, talk, lightning, mastery
---

Hi everyone, this is a lightning talk as an introduction on enhancing productivity

G'day, I'm Callum Silcock, Principal Engineer at ANZx one of the people behind Bluestone for the ANZx Web Experience

Now, early next year I will be running some sessions around enhancing productivity which goes into specific tooling and techniques but this talk focuses on the start of the journey, the first step in making time for productivity.

The goal of the talk today is to convince you of two things, 1. the mantra "practice makes perfect" or in this case "practicing productivity makes perfect" and second to create time for practicing productivity in your week.

Ok lets dive in,

I have a lot of friends that are tradies and have been talking to them about the meta differences in our fields from training to practice. There are two major differences I've noticed 

Firstly. Tradies typically go through an apprenticeship program, as part of this not only do carpenters learn how to create structures, cabinet makers learn how to make a cabinet, sparkies learn how to charge me a fortune to add a power point in my house; 
but they learn the *most efficient* way to achieve that goal. The *most efficient* way to hammer a nail, the *most efficient* way to create a kitchen, the most *efficient* way to charge me THREE HUNDRED DOLLARS for adding a power point.

They focus on *the most efficient* way to generate the output, whatever that output is.

Following on from this point, A good friend of mine (who coincidentally is a sparky that loved that joke) speaks a lot about "mastery" as a key point he strives for. In technology we have "generic levels" (eg. junior mid senior etc.) but we don't focus on a mastery. Mastery of a language, a mastery of a tool, a mastery of a technique. We dismiss this paradigm as old-fashioned and non-technological. But is that really the case?

Lets say, ok Callum, I'm down, I would like to be a master, a grand master, the mega $300 power outlet of technology, how do I get there?

Well, as I said up top, only two pieces are required, first creating time to improving your productivity and the second is practicing it.

Ok, we're engineers, we need something specific, so lets focus on a concrete example, lets look at the tool that everyone in this room uses, a source of magic, wonder and bewilderment, git. (the developers hammer, to follow on from my carpenter analogy)

How often would you say you use git every day, every hour, every minute. Well, I tracked myself as I was curios;
Keep in mind I'm one of those people who grew up in the "save your work every 10s in case the computer dies" generation, but the answer is, roughly 20-30 times an hour when you take into account, commits, pushes, fetches, rebasing etc.

So I blocked out time in my calendar to specifically look at, how can I make `git` more efficient for me. 

Starting with the flow that I run most often in `git` is to add all files, commit, push and open a pull request.

Maybe you use a git GUI like Tower, Github Desktop or Git lens which I used in VSCode, which requires a bunch of tabbing and clicking to add, commit and push. Well an obvious way of increasing productivity here is to focus on keyboard based input, so I'm going to spend the time learning git on the command line and boom we're one step closer to mastery.

Now lets say you've learnt the git CLI, so I'm typing in `git add -all`, `git commit -m "fix bugs"` (majority of my commit messages), `git push` and then open the github website and click on the "open pull request button", well there's some clicks in here that we could remove with a simple alias that opens the pull request url with `?quick_pull=1`  at the end of it so I can type in `open_pr` in my terminal and it opens that url. Another step closer to mastery.

Ok well now I have an alias for opening Pull requests why not alias the rest of the commands so I can type `gg s`,  `gg c`, `gg p`, `gg pr` which is 16 characters which is 60% less typing, another step closer.

Can't possibly improve upon this right?, What if we add a combo script that so I can type `gg z` to start the combo then the aliases `a c p pr` which is 13 characters total vs 80 characters which is further 80% saving. Another step closer.

Wait I also manually create tickets in that horrible Jira UI  and copypasta them to the commit titles and manually move them to review when I open a PR and post on slack asking for reviews when i've opened the PR and... and... and....

There is so much of these little pieces that we as developers do, constantly, every day. So many of these tasks that 20 times an hour we minutes on, in which, in my case, can be optimized down to seconds. There are so many of these "nails" that we hammer in.

Keep in mind I only dedicated about an hour a week on this for 3 weeks, but I have already saved myself a bunch of time since implementing this, think of how much time I will save overall, time I can put toward the output.

If you follow this mantra, one day, you too will be charging $300 for 20 minutes of easy work

Thank you

---

Bonus! My git aliases are available as a [downloadable package named "git goodies" or `gg`](https://github.com/csi-lk/gg)
