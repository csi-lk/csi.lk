/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */

interface i18n {
  locale: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolvePath = (object: Record<string, any>, path: string, defaultValue?: string): string =>
  path.split('.').reduce((o, p) => (o ? o[p] : defaultValue), object)

const i18n = ({ locale }: i18n): { t: (key: string) => string } => {
  const keys = require(`${process.cwd()}/src/i18n/${locale}.json`)
  return {
    t: (key: string): string => resolvePath(keys, key),
  }
}

export default i18n
