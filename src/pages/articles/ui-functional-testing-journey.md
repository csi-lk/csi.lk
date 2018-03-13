---
title: UI Functional Testing Journey
description: >-
  Which is the best Functional Testing tool, I took a look at Cypress, Test
  Cafe, Nightwatch, Cucumber and Selenium
path: /ui-functional-testing-journey
template: article
tags: 'message-media, testing, cypress, test-cafe, nightwatch, cucumber, selenium'
---
At [Message Media](http://messagemedia.com.au/) I built a Functional Test pipeline within our CI/CD process. The idea was to drastically reduce the amount of regression testing we were doing and enable the QAs to do what they do best; -create work for me- focus on finding bugs.

As our tests grew larger we started to run into issues with stability. Writing the tests were time consuming and the format did not match the coding style of the application.

## So what were you using?
* [CucumberJS](https://github.com/cucumber/cucumber-js)
* [Selenium Webdriver](https://www.npmjs.com/package/selenium-webdriver)
* [BrowserMob Proxy](https://github.com/lightbody/browsermob-proxy)

### So why the change?

Selenium and the W3C WebDriver API plainly sucks, we were constantly running into issues with:
* Stability
* Random failures
* Writing the tests
* Mismatched coding styles

It’s also
* Bulky requiring large installs
* Has Java as a requirement
* A general pain in the ass

> There’s got to be an easier solution out there, right?

## Our Requirements
* Uses the [Cucumber Gherkin Syntax](https://cucumber.io/docs/reference)
* Cross platform as we have team members using Mac / Windows / Linux
* Testing must be consistent
* Aim for under ~10 minute full run (developers are bad at waiting)

## Nightwatch

From initial research Nightwatch with [nightwatch-cucumber](https://github.com/mucsi96/nightwatch-cucumber) looked like a promising candidate. It offered the gherkin syntax with a better Javascript style. It also has the added bonus of [being able to debug with VS Code](http://mucsi96.github.io/nightwatch-cucumber/#debugging-with-visual-studio-code) 

When putting it into practice, the following issues occurred:

* The Nightwatch Cucumber plugin does not support scenarios
* It still uses Selenium (through Selenium Server)
* Upon [further reading](https://medium.com/qaworks/nightwatch-js-after-12-000-tests-and-3000-hours-8ae87a714158) we would have to spend a lot of time and energy writing fault tolerant tests

## Test Cafe
Looked more promising as [it doesn’t use Selenium](https://testcafe-discuss.devexpress.com/t/why-not-use-selenium/47/2) and also has a [Gherkin](https://github.com/sitegeist/gherkin-testcafe) wrapper to achieve the Cucumber requirement.

Once again we found issues including:

* The Gherkin plugin did not allow us to pass parameters to Test Cafe
* Cookies were reset between the Gherkin steps not allowing complete scenarios to run
* Lacked documentation and was hard to navigate
* Difficult to write tests
* Forces you to [use a PageModel syntax](https://medium.com/tech-quizlet/cypress-the-future-of-end-to-end-testing-for-web-applications-8ee108c5b255)

## Cypress

The holy grail with a great [Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) plugin, [amazing documentation](https://docs.cypress.io/guides/overview/why-cypress.html) and built in fault tolerance to help with random failures.

#### Good parts

* [Amazing documentation](https://docs.cypress.io)
* [Easy to use live development (watch) mode](https://docs.cypress.io/guides/core-concepts/test-runner.html#)
* [Does not use selenium](https://blog.red-badger.com/blog/2017/6/16/cypress-a-genuine-alternative-to-selenium-at-last)
* [Uses mocha under the hood for simpler assertion writing](https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions)
* [Supports TDD Gherkin syntax with a plugin](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
* [Built in error handling](https://docs.cypress.io/guides/guides/debugging.html)

#### Bad parts

* [No parallel testing yet](https://github.com/cypress-io/cypress/issues/681)
* No cross browser support yet
* You have to be very specific when writing your Cukes (Given / When / Then)

We have since converted our Front end Functional Testing process to Cypress, which surprisingly only took a few days and in the process made me fall in love with their toolchain.

I hope this article helps with your decision process on what testing tool to use.
