import * as Silk from '../../lib/silk'
import i18n from '../../lib/i18n'

const year = new Date().getFullYear()

const Footer = ({ fixed, locale }: { fixed?: boolean; locale: string }): HTMLElement => {
  const { t } = i18n({ locale })

  return (
    <footer className={`footer ${fixed && 'fixed'}`} data-testid="footer">
      <div>
        <p>&copy; {year}</p>
        <a href="/">Callum Silcock</a>
      </div>
      <div>
        <p>{t('footer.contact')}</p>
        <a
          href="mailto:contact@csi.lk"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="open-email"
        >
          {t('footer.email')}
        </a>
      </div>
      <div>
        <p>{t('footer.code')}</p>
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
        <p>{t('footer.social')}</p>
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
}

export default Footer
