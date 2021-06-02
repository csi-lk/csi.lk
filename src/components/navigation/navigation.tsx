import * as Silk from '../../lib/silk'

const Navigation = (): HTMLElement => (
  <nav className="navigation">
    <a className="logo" href="/">
      <i className="icon-terminal" role="presentation" />
      <h2 className="logo">Callum{`\n`}Silcock</h2>
    </a>
    <a href="/articles">articles</a>
  </nav>
)

export default Navigation
