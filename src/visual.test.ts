// eslint-disable-next-line import/no-extraneous-dependencies
import PercyScript from '@percy/script'

PercyScript.run(
  async (
    page: { goto: (url: string) => Promise<void> },
    percySnapshot: (snapshotName: string) => Promise<void>,
  ) => {
    await page.goto('http://localhost:8080/')
    await percySnapshot('home')
    await page.goto('http://localhost:8080/articles.html')
    await percySnapshot('articles')
    await page.goto('http://localhost:8080/articles/my-macos-shortcuts')
    await percySnapshot('my-macos-shortcuts')
    await page.goto('http://localhost:8080/404')
    await percySnapshot('404')
  },
)
