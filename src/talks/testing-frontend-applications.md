---
title: Testing Frontend Applications
description: Basics of tooling, best practices and how to get started testing frontend applications
permalink: talks/testing-frontend-applications.html
date: 2023-03-06
tags: talk
layout: talk
keywords: testing, frontend, applications, functional, unit, jest, cypress, testing, trophy, talk, eslint, prettier, react testing library, hooks, react,Blackduck, twistlock, sonarqube
slidesRaw: https://github.com/csi-lk/csi.lk/blob/master/src/talks/testing-frontend-applications.md
---

## 🛂
# Testing Frontend Applications
Another *CodingWithCallum™️* Session
 
note: 

This presentation was written using obsidian slides which is why the markdown looks a little weird, see attached PDF output and notes of every slide.

Everything underneath "note" below are speaker notes[[Server Components Slides]] to remind me what to talk about

---

# Who are you?
## Callum Silcock

Experience Engineering > Bluestone Platform (Web)

`https://csi.lk || github.com/csi-lk`

note: 

Have been doing Front end development for over a decade

Love hate relationship with testing

---

# What is this talk?

- Testing (right?... right)
- Tooling, best practices
- Very few images (no gifs, sorry)
- Interactive!
- Opinionated

note:

There are many kinds of tooling, these are the ones I suggest (+ some we already decided on)

Ask questions! Inturrupt! Call out when things don't make sense, if you're remote throw things in the chat

All of this is my opinion based on how i've seen testing work at 100+ frontend departments

Ok lets'a'go!

---

> Write tests. Not too many. Mostly integration. 

~ Guillermo Rauch (CEO of Vercel)

note:

Ok what does this mean?

---

# The Testing Trophy

![](https://res.cloudinary.com/kentcdodds-com/image/upload/f_auto,q_auto,dpr_2.0,w_1600/v1622744540/kentcdodds.com/blog/the-testing-trophy-and-testing-classifications/trophy_wx9aen.png)

Higher up the trophy = more \$\$\$ / better confidence

note:

You'll see a bunch of stuff I've stolen from Kent C Dodds in this talk
Ok the basic idea is, the higher up the trophy you go, the more expensive it is in terms of Development effort and Runtime
But the higher up the trophy we go, the better outcomes we get from our testing
So the best ROI we can get on our testing is in the middle of the trophy at the integration layer
But lets walk the trophy from bottom to top

---

# Static

> Catch typos and type errors as you write the code

Pretty straightforward....

note:

everyone loves static

---

## Tooling

- ESlint
- Typescript
- Prettier

---

## Static Example

```tsx
// can you spot the bug?
// ELint's for-direction rule can 😉
for (var i = 0; i < 10; i--) {
  console.log(i)
}
 
const two = '2'
// ok, this one's a bit contrived,
// but TypeScript will tell you this is bad:
const result = add(1, two)
```

note:

ref: [for-direction](https://eslint.org/docs/latest/rules/for-direction)

---

# Unit

> Verify that individual, isolated parts work as expected.

- Our quickest tests that require some writing

note:

unit tests should be simplistic, `a+b=c`
unit tests are great for backend but not great for frontend development that requires user interaction in a browser

---

## Tooling
- Jest
    - Mocks
    - Snapshots
- React Testing Library
- React Hooks Testing Library

---

## Unit example

```tsx
test('renders "no items" when the item list is empty', () => {
  render(<ItemList items={[]} />);
  expect(screen.getByText(/no items/i)).toBeInTheDocument();
});
 
test('renders the items in a list', () => {
  render(<ItemList items={['apple', 'orange', 'pear']} />);
  // could use a snapshot test but use toMatchInlineSnapshot();
  expect(screen.getByText(/apple/i)).toBeInTheDocument();
  expect(screen.getByText(/orange/i)).toBeInTheDocument();
  expect(screen.getByText(/pear/i)).toBeInTheDocument();
  expect(screen.queryByText(/no items/i)).not.toBeInTheDocument();
});
```

---

# Integration

-   Where the most tests will be written
-   Should not mock dependencies
    -   allows for automated updating of dependencies from Rennovate
-   Should only mock browser based pieces (eg. server APIs)

---

## Tooling

- Jest
- React Testing Library
- React Hooks Testing Library
- User Event
- Mock Service Worker
- ShellJS
- @jackfranklin/test-data-bot

---
## Integration Example

```tsx
import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from 'test/app-test-utils'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {handlers} from 'test/server-handlers'
import App from '../app'
```

```tsx
const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

const server = setupServer(...handlers)
 
beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
```

```tsx
test(`logging in displays the user's username`, async () => {
  await render(<App />, {route: '/login'})
  const {username, password} = buildLoginForm()
 
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))
 
  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))
 
  expect(screen.getByText(username)).toBeInTheDocument()
})
```

note:

I split this into three sections because it makes it easier to read and I couldn't get it to format correctly in one big one

---

# End to End

> A helper robot that behaves like a user to click around the app and verify that it functions correctly. Sometimes called "functional testing" or e2e.

-   Should only cover p0/p1 flows
-   Does not mock backend, runs against real data usually in an environment

---

## Tools

- playwright
    - what bluestone is using, (documented in `bluestone-hello`)
- cypress

---

## E2E Code Example

```tsx
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
 
import { BASE_URL } from "../config";
 
test("homepage has title and a button", async ({ page }) => {
  await page.goto(BASE_URL);
 
  await expect(page).toHaveTitle("ANZx – Join app!");
 
  await expect(page).toHaveURL(new RegExp(`^${BASE_URL}`));
 
  expect(page.locator(`button:has-text('click click')`)).toBeDefined;
});
```

```tsx
test("homepage handles accessibility", async ({ page }) => {
  await page.goto(BASE_URL);
 
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
 
  expect(accessibilityScanResults.violations).toEqual([]);
});
```

---

# What are we missing?

note:

ok we've made it through the testing trophy what's next

---

# Accessibility (a11y)

Automation tools can only get us 30% of the way toward being WCAG compliant (ref; UK Gov) 

note:

but better than nothing

---

## Tools

-   jest-axe
-   deque tooling
-   axe-core/playwright

---

# Security

- Blackduck (dependency scanning)
- Twistlock (container scanning)
- Sonarqube (high level issues like xss etc.)

---

# Live Demo 😱

---

# Suggested Reading

Kent C Dodds' blog (where I ~~stole~~ found this content)

- [Write tests. Not too many. Mostly integration](https://kentcdodds.com/blog/write-tests)
- [The Testing Trophy and Testing Classifications](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Why I never use shallow rendering](https://kentcdodds.com/blog/why-i-never-use-shallow-rendering)
