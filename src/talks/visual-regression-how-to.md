---
title: Automating Design Review with Visual Regression
description: How to utilise visual regression testing to automate design review (UAT) within your organisation, a talk that was given during 2020 at VueJS London
permalink: talks/visual-regression-how-to.html
date: 2020-06-10
tags: talk
layout: talk
keywords: presentation, talk, percy, design, review, visual, regression
repo: https://github.com/csi-lk/visual-regression-how-to
slidesEmbed: https://speakerdeck.com/player/8f193b3722a9406893bf77e3b709db4f
slidesSD: https://speakerdeck.com/csilk/automating-design-review-with-visual-regression
slidesPdf: https://github.com/csi-lk/visual-regression-how-to/blob/master/talk/automating-design-review-with-visual-regression.pdf
slidesRaw: https://github.com/csi-lk/visual-regression-how-to/blob/master/talk/automating-design-review-with-visual-regression-raw-md
---

## Automating Design Review with Visual Regression

🇦🇺
"dartah" = data
"rehpo" = repo

^ I have an Australian accent and mispronounce things

## What are we trying to solve?

- CSS Sucks [insert family guy blinds gif here]
- Manual regression sucks
- UAT sucks

^ As I start all of my talks, what are we trying to solve?

^ eg. The shadow is off, the color is different from the design
^

^ QA has to keep so many things in their head at once, they plain miss design changes

^ Anyone who has worked with a designer knows how annoying the 1 pixel issues are

^ This UAT process takes a long time and seems to be disjointed from the developer

```md
            .─.                      .─.                                                      .─.
           (   )    ┌────────┬─┐    (   )   ┌──────────┐   ┌────────┐         ┌────────┐     (   )
           ┌`─'┐    │  Ticket└─┤    ┌`─'┐   │          │   │        │  Merge  │   QA   │     ┌`─'┐
           │Des│───>│  Story   │───>│Dev│──>│  Branch  │──>│   PR   │────────>│  STG   │──┬─>│QA │
           │ign│    │          │    │   │   │          │   │        │         │  UAT   │  │  │   │
           └───┘    └──────────┘    └───┘   └──────────┘   └┬───────┘         └────────┘  │  └───┘
                                      ▲                     ├>Tests Pass                  │   .─.
                                      │                     └>Approval                    │  (   )
                                      │                                                   │  ┌`─'┐
                                      │                                                   │  │Des│
                                      │                                                   └─>│ign│
                                      │                     Fails Something                  └─┬─┘
                                      └────────────────────────────────────────────────────────┘
```

^ Your current workflow probably consists of design > ticket > dev > pr > merge > qa / staging / uat regression > designer finds an issue > back to dev

^ If anyone has seen my other talks there's a theme of pushing testing as close to the front of the process as possible

^ So my proposal is, let's bring this design review process forward to the PR stage with Visual Regression Testing

## So what is visual regression testing?

- Screenshot diffing
- Gold (master) vs new (feature branch)
- Expose unintended changes
- Give us a review process for the visual

^ Pretty much we're diffing screenshots

^ Between master vs feature or old vs new depending on what you're doing

^ Change thing here affects thing over there (dreaded 'user reporting something broken in IE')

^ Most importantly gives us a new stream of review process for visual

```md
                          Λ
                         ╱ ╲
                        ╱   ╲
                       ╱ E2E ╲
                      ╱───────╲
                     ╱         ╲
                    ╱           ╲
                   ╱ Integration ╲    <-- We are here
                  ╱───────────────╲
                 ╱                 ╲
                ╱                   ╲
               ╱        Unit         ╲
              ╱───────────────────────╲
             ╱                         ╲
            ╱                           ╲
           ╱           Static            ╲
           ───────────────────────────────
```

^ The testing pyramid

^ A type of integration test

^ You're not going to cover everything with visual regression, focus on the things that matter

^ Now lets get into it

## Examples

- [Companion Repo - https://github.com/csi-lk/visual-regression-how-to/](https://github.com/csi-lk/visual-regression-how-to/)
- [Percy.io](https://percy.io) ([Interface Example](https://percy.io/csilk/storybook-components/builds/5575612?utm_campaign=csilk&utm_content=storybook-components&utm_source=github_status_public))
  - Ready made examples, easy setup
  - Supports parallelisation
- [Happo.io](https://happo.io) ([Interface Example](https://happo.io/a/372/p/455/report/test))
  - Supports all browsers
  - Founder (Henric) is awesome

^ Pros and cons to each tool

^ Percy plugs in well and has a ton of ready made examples for different tools eg. cypress etc.

^ Happo supports all browsers and I have to call out that the founder actually was emailing with me on Sunday due to github actions issues I had and eventually did a PR to this repo showing how it works in this context which is awesome

## Example - Storybook Components

- Storybook
- HTML Components
- [Example PR with review step](https://github.com/csi-lk/visual-regression-how-to/pull/3)
- Pairs well with a design system or component library

^ Storybook with HTML components, could be React or Vue

^ Here's something I prepared earlier

^ Your designer can come in and edit this - request changes

^ Approve all

## Example - Responsive Website

- Eg. Jekyll, Gatsby etc.
- Build out to HTML files
- Breakpoints is where things go wrong
- [Example PR with review step](https://github.com/csi-lk/visual-regression-how-to/pull/5)
- Pairs well with full page designs

^ Lots of companies have static sites now from some content source that goes through something like Jekyll or Gatsby and spits out HTML files

^ Plug: my personal website csi.lk works exactly like this

^ Point percy at the ~~porcelain~~ dist with your `.html` glob and set it up do so some diffing

^ Once again designer comes in, approves and moves on

```

        .─.                      .─.                                                      .─.
       (   )    ┌────────┬─┐    (   )   ┌──────────┐   ┌────────┐         ┌────────┐     (   )
       ┌`─'┐    │  Ticket└─┤    ┌`─'┐   │          │   │        │  Merge  │   QA   │     ┌`─'┐
       │Des│───>│  Story   │───>│Dev│──>│  Branch  │──>│   PR   │────────>│  STG   │  ──>│QA │
       │ign│    │          │    │   │   │          │   │        │         │  UAT   │     │   │
       └───┘    └──────────┘    └───┘   └──────────┘   └┬───────┘         └────────┘     └───┘
                                  ▲         .─.         ├>Tests Pass
                                  │        (   )        └>Approval
                           Fails Something ┌`─'┐                 │
                                  │        │Des│                 │
                                  └────────│ign│◀────────────────┘
                                           └───┘
```

^ Remember our workflow from before?

^ Shorten the loop

## Pros

- Reduce manual QA time
- Include designers in the process
- Reduce the feedback loop
- Get it right once

^ No more: this is a high risk change because I edited the color of the button

^ Shorten the feedback loop, put designers in the process, create ownership

## Cons

- Extra step in a PR
- Extra tool to manage
- Train designers on PR process
- Takes time to run

^ As we mentioned your designers will need github access
