import fastGlob from 'fast-glob'
import { rename } from 'fs'

fastGlob.sync(['src/_includes/layouts/**/*.js']).forEach(file => {
  const filePaths = file.split('/')
  const fileName = filePaths.at(-1).replace('.js', '.11ty.js')
  const newFilePath = `${filePaths.slice(0, -1).join('/')}/${fileName}`
  rename(file, newFilePath, err => {
    // eslint-disable-next-line no-console
    if (err) console.log(`ERROR: ${err}`)
  })
})
