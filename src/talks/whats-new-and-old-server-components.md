---
title: "Back to the Future: What's New and Old About Server Components"
description: A talk about what's new and old with react server components, we do a deep dive into how it works
permalink: talks/whats-new-and-old-server-components.html
date: 2023-08-09
tags: talk
layout: talk
keywords: react, server, components, back, to, the, future, bttf, new, old, rsc, ssr, server side rendering, server components, react server components, react server side rendering, react server components vs server side rendering, react server components vs server component
useMermaid: false
---

# Back to the Future: What's New and Old About Server Components

A talk about React Server components by Callum Silcock, Principal Engineer at ANZx for MelbJS Aug / 2023 available on: https://rsc.csi.lk

This talk has been put together as a NextJS backed site so I can show how the 'slides' are being rendered while talking about them I would suggest looking at the talk on the above site

---

## Setup: What are "React Server Components" (RSC) anyway?

- The components and the environment
- Framework-independent
- I will be refering to them as RSCs for the rest of the talk

---

## Setup: So many TLAs

- SSG (Static Site Generation)
  - run when you build your application, and the generated output is static
- SSR (Server-Side Rendering)
  - runs at the time it is requested, result may be cached for future requests
- CSR (Client-Side Rendering)
  - delivered to the browser, which generates content that is inserted into the DOM

---

## Setup: Why are you using RSC?

Well.. it's the cool new thing right?... true but not the whole story

- Defining the next generation of Web for ANZ
- Banks need a shitton of security
- State is less of a concern
- Speed 🏃💨

---

## Setup: Go Back In Time

What's old is new again

I'll try to call out the new and the old

RSC fits nicely into the existing way you write react

_Claim:_ “React Server Components (RSC) are just PHP”.
_Reality:_ RSC are special because it finally means we can use the same tech to render components on both the client or the server. One line of code converts a server component into a client component: 'use client'

---

## Diving into RSCs: Static Content

- This page is generated server-side using RSC new
- React components run on server
- HTML output sent over the wire
- Let's have a look at the source...

---

## Diving into RSCs: Virtual DOM

- Script tags that contain an encoded form of this content
- React's new line-based internal data streaming format
- Compact string representation of the virtual DOM new
- Lets have a look in the [RSC parser tool](https://rsc-parser.vercel.app/)

---

## Diving into RSCs: Client Components

Lets create a client component here that logs "Running the client component" named `MyClientComponent`

- If components require interactivity or hooks they should run on the client
- Default is to treat components as server components new
- Opt in with `'use client';`
- Client-components by default are pre-rendered on the server (SSR) old
- Lets go to the code again and find `MyClientComponent` `$La``

---

## Diving into RSCs: Virtual DOM Reconciliation

Lets create a client component here that confuses React with timestamp

- On page load reconcile Virtual DOM / returned static DOM old
- If they don't match throw error
  - `Warning: Text content did not match`
- Wait, how?
- And now our page is entirely client rendered 😭
  - `[...] the entire root will switch to client rendering`

---

## Diving into RSCs: Server Component in Client

This client component has children `{children}``: I am rendered on the server

1. Server runs ServerComponent
1. ClientComponent is inserted into the Virtual DOM aka `$La``
1. ClientComponent `{children}`` set to ServerComponent output

- ClientComponent doesn't care!
- Back to the code!

---

## Finishing Up: Further Topics

There's so much more I'd like to have talked about but felt this is a good stopping point for a 30min talk

- Disabling SSR for Client Components
- Client Components in Server Components
- Server actions
- `async`!?

---

## Finishing Up: Questions?

Example questions:

- Why is this so confusing?
- Where do I find out more?
- Should I just give up and go back to PHP?

👋

---

## Finishing Up: Resources

### RSC From Scratch

https://github.com/reactwg/server-components/discussions/5

In this technical deep dive, we'll implement a very simplified version of React Server Components (RSC) from scratch.

### Demystifying RSC

https://demystifying-rsc.vercel.app/

Experienced React developers who are perhaps new to RSC. Or people using RSC who want to understand more about how it works.
