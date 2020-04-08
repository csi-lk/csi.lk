import * as Silk from '../../lib/silk'

const Navigation = (): HTMLElement => (
  <nav className="navigation">
    <a className="logo" href="/">
      <i className="icon-terminal"></i>
      <h2 className="logo">Callum{`\n`}Silcock</h2>
    </a>
    <a href="articles.html">articles</a>
  </nav>
)

export default Navigation
