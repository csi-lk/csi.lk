module.exports = {
  // Fonts
  'font-family-serif': "'Georgia', 'Garamond', 'Times', serif",
  'font-family-system':
    "-apple-system, blinkmacsystemfont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",

  'font-size': 'calc(15px + 0.25vw)',
  'font-size-xsmall': '0.7em',
  'font-size-small': '0.8em',
  'font-size-medium': '1em',
  'font-size-large': '1.2em',
  'font-size-xlarge': '1.4em',
  'font-size-xxlarge': '1.8em',
  'font-size-xxxlarge': '4.5em',

  'paragraph-spacing': '0.9em',
  'paragraph-indent': '1.5em',

  'line-height-heading': '1.45',
  'line-height-body': '1.55',

  // Colors
  'color-background': '#26292c',
  'color-background-transparent': 'rgba(33, 33, 33, 0.75)',
  'color-background-secondary': '#443737',
  'color-text': '#ffffff',
  'color-text-alt': '#818a91',
  'color-border': '#5a5a5a',
  'color-primary': '#ff8f00',
  'color-primary-offset': '#ffbf6d',
  'color-secondary': '#3282b8',
  'color-header-border': '#55595c',

  // Code Colors
  'code-text': '#ffffff',
  'code-emphasis': '#a8a8a2',
  'code-literal': '#ae81ff',
  'code-value': '#a6e22e',
  'code-keyword': '#f92672',
  'code-function': '#66d9ef',
  'code-string': '#e6db74',
  'code-comment': '#75715e',

  // Breakpoints
  // I couldn't get postcss @media to work so here for reference
  'breakpoint-xxsmall': '20em',
  'breakpoint-xsmall': '25em',
  'breakpoint-small': '37.5em',
  'breakpoint-medium': '50em',
  'breakpoint-large': '62.5em',
  'breakpoint-xlarge': '75em',
  'breakpoint-xxlarge': '87.5em',
  'breakpoint-xxxlarge': '120em',

  // Borders
  'border-double': '6px double var(--color-border)',
  'border-single': '2px solid var(--color-border)',
  'border-large': '6px solid var(--color-border)',
  'border-radius': '6px',

  // Spacing

  'spacing-xsmall': '0.156em',
  'spacing-small': '0.313em',
  'spacing-medium': '0.625em',
  'spacing-large': '1.250em',
  'spacing-xlarge': '2.500em',
}
