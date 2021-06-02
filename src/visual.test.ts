// eslint-disable-next-line import/no-extraneous-dependencies
import PercyScript from '@percy/script'

const percyOptions = { widths: [768] }

PercyScript.run(
  async (
    page: { goto: (url: string) => Promise<void> },
    percySnapshot: (snapshotName: string, options: { widths: number[] }) => Promise<void>,
  ) => {
    await page.goto('http://localhost:8080/')
    await percySnapshot('home', percyOptions)
    await page.goto('http://localhost:8080/articles.html')
    await percySnapshot('articles', percyOptions)
    await page.goto('http://localhost:8080/timeline.html')
    await percySnapshot('timeline', percyOptions)
    await page.goto('http://localhost:8080/articles/my-macos-shortcuts')
    await percySnapshot('my-macos-shortcuts', percyOptions)
    await page.goto('http://localhost:8080/404')
    await percySnapshot('404', percyOptions)
  },
)
