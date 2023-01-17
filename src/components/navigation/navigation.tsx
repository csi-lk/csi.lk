import * as Silk from '../../lib/silk'
import i18n from '../../lib/i18n'

const Navigation = ({ locale }: { locale: string }): HTMLElement => {
  const { t } = i18n({ locale })

  return (
    <nav className="navigation">
      <a className="logo" href="/">
        <i className="icon-terminal" role="presentation">
          {' '}
        </i>
        <h2 className="logo">Callum{`\n`}Silcock</h2>
      </a>
      <div className="links">
        <a href="/talks">{t('navigation.talks')}</a>
        <a href="/timeline">{t('navigation.timeline')}</a>
        <a href="/articles">{t('navigation.articles')}</a>
        <a href="/bookshelf">{t('navigation.bookshelf')}</a>
      </div>
    </nav>
  )
}

export default Navigation
