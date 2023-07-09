---
title: Attacking the Frontend
description: A lightning talk about common security issues in frontend applications going through XSS, React escape hatches, resource and encoding urls
permalink: talks/attacking-the-frontend.html
date: 2023-07-06
tags: talk
layout: talk
keywords: common, security, issues, xss, react, escape, hatches, encoding, urls, resource, dangerous 
slidesRaw: https://github.com/csi-lk/csi.lk/blob/master/src/talks/attacking-the-frontend.md
slidesPdf: https://github.com/csi-lk/csi.lk/blob/master/src/talks/attacking-the-frontend.pdf
slidesSD: https://speakerdeck.com/csilk/attacking-the-frontend
slidesEmbed: https://speakerdeck.com/player/78d916656bb3451e97ea778dc714ae8f
---

## 🔐
# Attacking the Frontend
*CodingWithCallum™️* Lightning Talk
 
note: 

This presentation was written using obsidian slides which is why the markdown looks a little weird, see attached PDF output and notes of every slide.

Everything underneath "note" below are speaker notes to remind me what to talk about

---

# Common issues

- Code injection
	- How does the web app handle unexpected data
- XSS
	- "Cross Site Scripting"
	- Attacker submitted code run in browser
	- CSP by itself cannot prevent XSS
- HTML elements can run code!

---

# React

- Context sensitive output encoding
	- out of the box
	- until you use something with the word `dangerous` in front of it
- React will protect you from yourself

---

## dangerouslySetInnerHTML

- Don't use this + the linter will yell at you if you do
- Needs DOMPurify if you need to use it
	- `{dangerouslySetInnerHTML: DOMPurify.sanitize({html})}`
	  
---

## escape hatches

- Bypass react and access native DOM APIs
- Direct DOM Manipulation
- Good news: React is deprecating this
	- should be disallowed
		- `findDOMNode` 
		- `innerHTML`
	- `createRef` is not

note:

Allows us to get outside of react and go straight to the browser

---

# Encoding urls

- Avoid taking full URL as an input
- Do URL sanitisation
	- Nextjs does this for us
- Should allowlist certain urls

---

# Resource urls

- Javascript & Resource URLs can be a potential sink
	- are being disallowed from React 17+
	- `data.` still runs

---

# Best practices

- "If you are going to the DOM directly, talk to security"
- CSRF
- Cookies should have `samesite` set (or better be secure)

---

# Resources

- [ReactVulna](https://github.com/edu-secmachine/reactvulna) is a deliberately vulnerable app you can play around with 
- React has a guide on [escape hatches](https://react.dev/learn/escape-hatches)
- [Its-fine](https://github.com/pmndrs/its-fine) A collection of escape hatches exploring 
- `React.__SECRET_INTERNALS_DO_NOT`
- `_USE_OR_YOU_WILL_BE_FIRED`

