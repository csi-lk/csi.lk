import * as Silk from '../../lib/silk'

const Footer = ({ fixed }: { fixed?: boolean }): HTMLElement => (
  <footer className={`footer ${fixed && 'fixed'}`} data-testid="footer">
    <div>
      <p>&copy; 2021</p>
      <a href="/">Callum Silcock</a>
    </div>
    <div>
      <p>Contact</p>
      <a
        href="mailto:contact@csi.lk"
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="open-email"
      >
        Email
      </a>
    </div>
    <div>
      <p>Code</p>
      <a
        href="https://github.com/csi-lk/"
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="open-new-window-external"
      >
        Github
      </a>
    </div>
    <div>
      <p>Social</p>
      <a
        href="https://au.linkedin.com/in/callumsilcock"
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="open-new-window-external"
      >
        LinkedIn
      </a>
      /
      <a
        href="https://stackoverflow.com/users/766958/csilk"
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="open-new-window-external"
      >
        Stackoverflow
      </a>
    </div>
  </footer>
)

export default Footer
