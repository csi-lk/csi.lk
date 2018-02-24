---
path: /blocking-page-navigation-in-reactjs
title: Blocking page navigation in a ReactJS Application (React Router)
description: How to block page navigation in ReactJS (React Router) using Router and Browser based techniques
template: article
tags: reactjs, code
---
_This article originally appeared on the [Message Media Developer Blog](https://developers.messagemedia.com/blocking-page-navigation-in-a-reactjs-application-react-router/), be sure to check it out._

Our product owner came to us with an interesting problem the other day, in the latest release of the [Message Media Front End](https://hub.messagemedia.com) we have a new payment portal for customers to pay invoices, when a user is in the process of paying a bill we need to block navigation, or in his words:

> As a billing contact
> I want to confirm my intent to leave the payment portal when my payment is still processing
> So that I am aware that my payment hasn't finished processing

## Blocking page navigation with React Router

There seems to be [quite](https://github.com/ReactTraining/react-router/issues/4635) [a](https://github.com/ReactTraining/react-router/issues/2106) [few](https://github.com/a-axton/react-router-confirm-navigation) methods of achieving this but most are pre v4…

### Let’s go to the docs

React Router have a [great online documentation](https://reacttraining.com/react-router/core/guides/philosophy) portal available, upon a quick search we find the `<Prompt />` method.

> Prompt the user before navigating away from a page.

Great! Let’s create a simple component to test.

### Simple Navigation Blocker Component

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { Prompt } from 'react-router-dom'

const NavigationBlocker = (props) => (
  <Prompt
    when={props.navigationBlocked}
    message="Are you sure you want to leave?"
  />
)

NavigationBlocker.propTypes = {
  navigationBlocked: PropTypes.bool.isRequired,
}

export default NavigationBlocker
```

_Note: I’m specifically using `react-router-dom` but you can use plain ol’ `react-router` for this_

Users should now see a prompt when clicking on links between routes but what about browser actions eg. Back / Forward buttons, Reload or Close?

## Blocking browser navigation with `onbeforeunload`

Once again you’re going to find many articles / stack overflow questions / tweets on how to implement this so I’d suggest

### Go back to the docs

As per the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload):

> The `WindowEventHandlers.onbeforeunload` event handler property contains the code executed when the `beforeunload` is sent.

The problem is there’s many ways to implement this but as of 2017 most browsers block custom messages (for security reasons), as we don’t need to worry about this we can use something as simple as:

```javascript
// Enable navigation prompt
window.onbeforeunload = () => true
// Remove navigation prompt
window.onbeforeunload = null
```

### Let’s add it to our existing component

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { Prompt } from 'react-router-dom'

const NavigationBlocker = (props) => {
  if (props.navigationBlocked) {
    window.onbeforeunload = () => true
  } else {
    window.onbeforeunload = null
  }
  return (
    <Prompt
      when={props.navigationBlocked}
      message="Are you sure you want to leave?"
    />
  )
}

NavigationBlocker.propTypes = {
  navigationBlocked: PropTypes.bool.isRequired,
}

export default NavigationBlocker
```

And just like that we have a navigation blocking component that we can easily turn on and off.

## Extending it with Redux

I would suggest extending it to be a Global Navigation Blocker from here, when a processing redux action is sent send another to block navigation, when it resolves send another to resolve.

This allows you to include the blocker once at app level rather than including every time you need it.

This is what my implementation ended up looking like:

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Prompt } from 'react-router-dom'

import { getNavigationBlocked } from '../navigation-selectors'

const GlobalNavigationBlocker = (props) => {
  if (props.navigationBlocked) {
    window.onbeforeunload = () => true
  } else {
    window.onbeforeunload = null
  }
  return (
    <Prompt
      when={props.navigationBlocked}
      message="Are you sure you want to leave?"
    />
  )
}

GlobalNavigationBlocker.propTypes = {
  navigationBlocked: PropTypes.bool.isRequired,
}

export const mapStateToProps = state => ({
  navigationBlocked: getNavigationBlocked(state),
})

export default connect(mapStateToProps)(GlobalNavigationBlocker)
```

## Drawbacks

Unfortunately because of how `onbeforeunload` can be misused, modern browsers have implemented some safeguards, as described in the docs:

> To combat unwanted pop-ups, some browsers don't display prompts created in `beforeunload` event handlers unless the page has been interacted with; some don't display them at all.

And

> Various browsers ignore the result of the event and do not ask the user for confirmation at all …  Firefox has a switch named `dom.disable_beforeunload` in about:config to enable this behaviour. (For eg.)

Or, TL;DR:

* The user must interact with the page or the `onbeforeunload` event will not fire
* `onbeforeunload` can be turned off with browser settings
  * [There are ways around this](https://stackoverflow.com/a/18115932) using heavier handed approaches but I would not recommend them

You, also, cannot specify what message is shown to the user during this interaction.

All in all, I hope this saved you some time researching!