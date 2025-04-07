---
title: Unlocking Lockfiles - A developers Guide to Package Management
description: A deep dive into package management, lockfiles and how to manage them
permalink: talks/unlocking-lockfiles.html
date: 2025-03-19
tags: talk
layout: talk
keywords: pnpm, yarn, npm, package management, lockfiles, semver, renovate,
  package.json, javascript, nodejs
slidesEmbed: https://speakerdeck.com/player/a54de6879b50498f9c28732e2a14a3d9
slidesSD: https://speakerdeck.com/csilk/unlocking-lockfiles-a-developers-guide-to-package-management
slidesPdf: https://github.com/csi-lk/cypress-gwt-example/blob/master/talk/unlocking-lockfiles.pdf
slidesRaw: https://github.com/csi-lk/cypress-gwt-example/blob/master/talk/unlocking-lockfiles.md
---
# Unlocking Lockfiles
## A Developers Guide to Package Management

Another *CodingWithCallum* session

---
<!-- .slide: data-auto-animate -->
# What are we covering?

+ History
+ *Fun*damentals

notes:
I could spend hours talking about package managers and how they work so I'm going to try to filter the content to the most relevant information. If you want me to go into more depth on any topic please ask at the end

---
<!-- .slide: data-auto-animate -->
## History Lesson

notes:

The easiest way for me to explain package management is to go through how we got here and explain some concepts and the needs along the way

---
<!-- .slide: data-auto-animate -->
## History Lesson

# Need (>2010)
+ include libraries via `<script>` tags
+ copypasta code from stackoverflow etc.

notes:
Back in the day there was no package management system
We just cowboy'd script tags (if you'd like an example of this check out the analytics package 😉)
Source control (if you were using it) would contain a bunch of vendor files

---
<!-- .slide: data-auto-animate -->
## History Lesson

# Need (>2010)

_an extremely embarrassing example_

notes:
Open url: https://github.com/csi-lk/silk-ajax-comments/blob/master/ajaxcomments.js (written for wordpress v3, we're currently at v7)
The reason for no indentation is that ie7 would sometimes stop executing when it would hit tabs in the code
super secure approach

---
<!-- .slide: data-auto-animate -->
## History Lesson

# Birth (2010)

+ `npm` is created
+ Originally designed for Nodejs
+ Created standardised registry
+ `package.json` created

notes:
npm - node package manager was created
first centralised registry for JavaScript packages... also confusingly named `npm`
standardised versioning and dependency management


---
<!-- .slide: data-auto-animate -->
## History Lesson

# Birth (2010)

_another... extremely embarrassing example_

notes:

https://www.npmjs.com/package/aws-ses-local
defined `package.json` with version fields etc. 
overall, a very manual `npm publish` workflow
show dependency list

---
<!-- .slide: data-auto-animate -->
## History Lesson

# Birth (2010)

+ Recursive dependency resolution
+ 🐢🐢🐢🐢
+ Nested `node_modules`

notes:

Ok so the main point here is that module resolution was created and happened recursively
So when you install a package, `npm` would read that package.json's file and install their packages and so forth
(turtles all the way down)
Originally `npm` decided to create a `node_modules` folder in each dependencies dependency


---
<!-- .slide: data-auto-animate -->
## History Lesson

# Birth (2010)

```
callums-bad-code/
├── node_modules/
│   └── A/
│       ├── package.json
│       └── node_modules/
│           └── B/
│               ├── package.json
│               └── node_modules/
│                   └── C/
│                       └── package.json
```


---
<!-- .slide: data-auto-animate -->
## History Lesson

# Birth (2010)

+ This was pretty revolutionary
+ `node_modules-black-hole.png`
+ Poor windows

notes:

No more manual management, projects became portable and conflicts could happen automatically
Crazy amount of duplication and caused path length issues on Windows (affecting dozens of front end developers!)
Great base to start from
Ok we can move on to the next era, _the rise_

---
<!-- .slide: data-auto-animate -->
## History Lesson
# Rise (2012-2015)
+ Bower / RequireJS / Browserfy / Grunt / Gulp
+ `npm` gets used for frontend things _alot_
+ `node_modules` folder becomes truely unusable

notes:

A bunch of new tooling starts to come on the scene
Bower specifically came out for front end dependencies and started to tackle fonts, static files etc. as well
RequireJS and Browserify started to bridge the gap between Node and JS dependencies
Then we had build systems of Grunt / Gulp start to integrate into the package management fray
But, overall... `npm` starts to get adopted for the front end
The amount of dependencies increases, `node_modules` becomes crazy complicated. We need a better solution

---
<!-- .slide: data-auto-animate -->
## History Lesson
# Flat (2016)

+ `yarn` released (from Facebook -> meta)
	+ lockfiles are born
	+ offline mode
	+ security (spoliers!)
+ `npm` creates `package-lock.json`
+ flat dependency to avoid duplications

notes:

`yarn` was my favourite package manager until very recently
Introduced lockfiles for _deterministic_ installation
Parallelize dependency installation

So npm went, hey we can do that too and created the package lock

Ok, lets explain flat dependency resolution first


---
<!-- .slide: data-auto-animate -->
## History Lesson
# Flat (2016)

```
node_modules/
├── package-a/
│   └── node_modules/
│       └── package-c/ (version 1.0.0)
└── package-b/
    └── node_modules/
        └── package-c/ (version 1.0.0)
```

notes:

Ok remember our nested dependency structure from before that `npm` introduced

`package-c` appears twice, creating duplication even when both `package-a` and `package-b` use the same version

Well, lets start "hoisting" things


---
<!-- .slide: data-auto-animate -->
## History Lesson
# Flat (2016)

```
node_modules/
├── package-a/
├── package-b/
└── package-c/ (version 1.0.0, shared by both package-a and package-b)
```

notes:

What's `hoisting`?
Dependencies are "lifted" to the highest possible level in the `node_modules` tree.
By doing this we can de-duplicate our dependencies

But what happens when different versions are required? For example, if `package-b` needs `package-c@2.0.0`:

---
<!-- .slide: data-auto-animate -->
## History Lesson
# Flat (2016)

```
node_modules/
├── package-a/
├── package-b/
│   └── node_modules/
│       └── package-c/ (version 2.0.0)
└── package-c/ (version 1.0.0, used by package-a)
```

notes:

The most commonly used version is hoisted to the top level, and other versions remain nested where needed.

This solved a ton of the issues we saw introduced by `npm` but created some more like the "Phantom dependency" problem 👻

But before we get to that... security!

---
<!-- .slide: data-auto-animate -->

## History Lesson
# Flat (2016)

`yarn`'s new security model
+ checksums
+ offline mode
+ resolution
+ license checks
+ script execution
+ auditing

notes:

Security!
- cryptographic checksums so that package content was verified against checksum 
	- avoids tampering and malicious substitutions
- offline meant it would protect against network attacks during install
	- great for government 😉
- resolution security
	- Deterministic installation algorithm that reduced the risk of inconsistent packages
	- Stricter handling of package.json files
- license checking
	- identify and report license types for all installed packages (MIT ISC etc.)
- script execution
	- controlled environment for running lifecycle scripts
	- isolation of script execution
	- options to disable running package scripts
- auditing
	- that thing that comes up saying your package has a vuln

---

<!-- .slide: data-auto-animate -->
## History Lesson
# Flat (2016)

Phantom dependencies (I ain't afraid of no ghost 👻)

(Using things not listed in `package.json`)

```
Your package.json: { "dependencies": { "package-a": "1.0.0" } }
Package A's package.json: { "dependencies": { "package-b": "2.0.0" } }
```

```
node_modules/
├── package-a/
└── package-b/  (hoisted from package-a/node_modules/)
```

notes:

Because Node.js searches for modules in the node_modules directory, your code can access any package in the top-level node_modules, whether or not you declared it as a dependency

Because the packages are hoisted they exist in the `node_modules` dir

This causes *massive* headaches around dependency hell (it's unclear which package is the problem)

Example of issue I had at Clearscore where we had an undeclared css dep that had a breaking version update that caused the site to go green

Phew, that was a lot... lets get into the modern era


---
<!-- .slide: data-auto-animate -->
## History Lesson
# Modern (2017+)

+ `pnpm` created
	+ content-addressable store
	+ symlink all the things
+ solved "phantom" dependencies
+ `yarn` (v2 berry) releases Plug'n'Play
+ Deno switches to URL imports

notes:

ok there's a lot here and that I'm going to go into individually

let's start with the content-addressable store

---
<!-- .slide: data-auto-animate -->
## History Lesson
# Modern (2017+)

`pnpm` Content-Addressable Storage

+ Global store in `~/.pnpm-store`
	+ All packages x versions are stored here
+ Hash-based addressing
	+ Unique + Free Integrity check
+ Immutable

notes:

Data is stored and retrieved based on it's content NOT it's location

Each package version stored under a directory named based on a hash of it's content

Once a package is in the store, it's never modified so builds are reproducible and reliable

---

<!-- .slide: data-auto-animate -->
## History Lesson
# Modern (2017+)

`pnpm` Symlinks

+ Symlink local to the Global store
+ Strict node module structure
+ Multi-level linking
	+ symlinks on top of symlinks

notes:

Instead of copying packages into your project's `node_modules`, pnpm creates symbolic links to the global store

pnpm creates a structure that strictly reflects the actual dependencies declared in your package.json.

- Direct dependencies are linked at the top level of `node_modules`
- Nested dependencies are properly linked within their parent packages
- A `.pnpm` directory contains flattened links to all packages

---

<!-- .slide: data-auto-animate -->
## History Lesson
# Modern (2017+)

```
node_modules/
├── express -> ./.pnpm/express@4.17.1/node_modules/express
└── .pnpm/
    ├── express@4.17.1/
    │   └── node_modules/
    │       ├── express/  (actual link to global store)
    │       ├── body-parser -> ../../body-parser@1.19.0/node_modules/body-parser
    │       └── ... (other express dependencies)
    ├── body-parser@1.19.0/
    │   └── node_modules/
    │       ├── body-parser/  (actual link to global store)
    │       └── ... (body-parser dependencies)
    └── ... (other packages)
```

notes:

Solves the biggest dependency management issues we currently have

Disk space / Install speed / Strick boundaries / Smaller `node_modules` / High Security

And, lastly solves the "Phantom Dependency" problem we talked about before

Ok, quickly; what's Plug'n'Play?

---

<!-- .slide: data-auto-animate -->
## History Lesson
# Modern (2017+)

`yarn` (v2 berry) Plug'n'play

+ Solves the same problems I just covered
+ Peer dependency issues
+ Zero install

notes:

Yarn will specifically call out peer dependency mismatches
Example from more of my code when I did a coding exercise when going for the ANZ role (I wanted to show I'm fancy)
https://github.com/csi-lk/seek-coding-exercise/blob/main/.pnp.cjs

---

<!-- .slide: data-auto-animate -->
## History Lesson
# Today (2024+)

+ Package management is everywhere yo
+ Security concerns are now just supply chain attacks
+ Monorepo management
+ The rise of `bun`

notes:

Phew, ok we're up to current state

Bun seems to be rapidly gaining market share (and I'm now using it for my own projects) as it's faster than `pnpm` but includes build tools and runtime integration (best of pnpm, gulp, requirejs etc. mashed together)

Ok that's enough history lesson, now the main reason I wanted to give this talk...

---

<!-- .slide: data-auto-animate -->
## *Fun*damentals

notes:

They're fun!

---

<!-- .slide: data-auto-animate -->
## *Fun*damentals
# SemVer

+ Basic format: `MAJOR.MINOR.PATCH` (e.g., `2.3.1`)
+ **MAJOR:** Breaking changes
+ **MINOR:** New features, no breaking changes
+ **PATCH:** Bug fixes, no new features or breaking changes

notes:

Pretty sure everyone knows SemVer by now but just for a refresher

---


<!-- .slide: data-auto-animate -->
## *Fun*damentals
# Common Version Ranges

+ **Exact version**: `"react": "17.0.2"`
	+ Only use exactly version 17.0.2
+ **Caret (^)**: `"react": "^17.0.2"`
	+ Allow updates to any 17.x.x version but not 18.0.0 (MINOR / PATCH)
+ **Tilde (~)**: `"react": "~17.0.2"`
	+ Allow updates to 17.0.x but not 17.1.0 (PATCH only)
+ **Wildcard (*)**: `"react": "17.*.*"` or `"react": "17.*"` 
	+ Any version starting with 17

notes:

Version range specifiers is the `npm` defined spec for how to reference dependency versioning

---

<!-- .slide: data-auto-animate -->
## *Fun*damentals
# Un-common Version Ranges

+ **Greater than (>)**: `"react": ">17.0.0"`
	+ Any version higher than 17.0.0
+ **Greater than or equal (>=)**: `"react": ">=17.0.0"` 
	+ Version 17.0.0 or higher
+ **Less than (<)**: `"react": "<18.0.0"` 
	+ Any version lower than 18.0.0
+ **Range**: `"react": ">=16.0.0 <18.0.0"` 
	+ Between 16.0.0 and 18.0.0 (excluding 18.0.0)
+ **OR**: `"react": "15.0.0 || 16.0.0"` 
	+ Either exactly 15.0.0 or 16.0.0

notes:

Please don't use any of these unless you have a _very_ good reason to

---

<!-- .slide: data-auto-animate -->
## *Fun*damentals
# Lockfile

+ Locking / Freezing your dependencies
+ Same immutable state of dependencies
+ Stop drift of dependencies between deployments

notes:

Before lockfiles package installations could vary from one day to the next or from one machine to another, even with the same package.json file WHICH WAS GREAT FUN

The name has become standard terminology across package managers: 
(`npm` called it shrinkwrap for a while but lets forget about that)
package-lock.json (npm), yarn.lock (Yarn), pnpm-lock.yaml (pnpm), Gemfile.lock (Ruby), Cargo.lock (Rust)


---

<!-- .slide: data-auto-animate -->
## *Fun*damentals
# Updating the Lockfile

+ Install dependencies within defined ranges
	+ `"react": "^18.3.1"`
		+ registry has `react@18.4.2`
+ Update lockfile to point to `react@18.4.2`
+ `package.json` stays the same

notes:

What happens when we update the lockfile

We currently have react defined at 18.3.1 with a caret meaning take minor or patch updates

So when you update the lockfile you are taking on a tiny bit of risk that you're moving the dependencies for the whole project _but_ it's within the risk profile we've accepted

---

<!-- .slide: data-auto-animate -->
## *Fun*damentals
# Renovate

+ Update the `package.json`
	+ Within defined ranges
+ Update lockfile

notes:

Ok what is renovate doing?

https://github.com/anzx/bluestone/pull/8220

Effectively the `package.json` updating part but within the same defined ranges

We currently have react defined at 18.3.1 with a caret meaning take minor or patch updates

---

<!-- .slide: data-auto-animate -->

# Phew

we made it


---

<!-- .slide: data-auto-animate -->

# Questions?

- How does `pnpm` handle `workspace:*` resolution?
- You didn't go into peer dependencies, do you hate them?
- How is your beard not grey by now?
