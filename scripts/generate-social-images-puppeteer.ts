import * as fs from 'fs'
import * as path from 'path'
import puppeteer from 'puppeteer'

interface SocialImageData {
  title: string
  description: string
  permalink: string
  type: 'article' | 'talk' | 'page'
}

/**
 * Generate social media image HTML template
 */
function generateSocialImageHTML(data: SocialImageData): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      width: 1200px;
      height: 630px;
      background: #1a1a1a;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 60px;
    }

    .card {
      background: #2d2d2d;
      border-radius: 20px;
      padding: 60px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      border: 1px solid #404040;
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(90deg, #667eea, #764ba2);
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .type {
      color: #888;
      font-size: 24px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 20px;
    }

    .title {
      color: #ffffff;
      font-size: 54px;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 30px;
      max-height: 240px;
      overflow: hidden;
      word-wrap: break-word;
    }

    .description {
      color: #cccccc;
      font-size: 24px;
      line-height: 1.3;
      max-height: 100px;
      overflow: hidden;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
      padding-top: 30px;
      border-top: 2px solid #f0f0f0;
    }

    .site {
      font-size: 32px;
      font-weight: 700;
      color: #667eea;
    }

    .url {
      font-size: 24px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="content">
      <div class="type">${data.type}</div>
      <h1 class="title">${data.title}</h1>
      <p class="description">${data.description}</p>
    </div>
    <div class="footer">
      <div class="site">csi.lk</div>
      <div class="url">csi.lk/${data.permalink}</div>
    </div>
  </div>
</body>
</html>`
}

/**
 * Generate social media image using Chrome DevTools Protocol
 * Fallback implementation that creates HTML files for manual conversion
 */
async function generateSocialImage(data: SocialImageData, browser: Awaited<ReturnType<typeof puppeteer.launch>>): Promise<void> {
  const outputDir = path.join(__dirname, '../dist/social')
  const tempDir = path.join(__dirname, '../temp/social-html')

  // Ensure directories exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true })
  }

  const fileName = data.permalink.replace(/[^a-zA-Z0-9]/g, '_')
  const html = generateSocialImageHTML(data)
  const htmlPath = path.join(tempDir, `${fileName}.html`)

  // Write HTML file
  fs.writeFileSync(htmlPath, html)

  // Generate PNG (best effort - will throw if browser unavailable)
  const page = await browser.newPage()

  // Set viewport to exact social media image dimensions
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 })

  // Load the HTML content
  await page.setContent(html, { waitUntil: 'networkidle0' })

  // Take screenshot
  const imagePath: `${string}.png` = `${path.join(outputDir, fileName)}.png`
  await page.screenshot({
    path: imagePath,
    fullPage: false,
    type: 'png',
  })

  await page.close()
  console.log(`✅ Generated social image: ${imagePath}`)
}

interface Frontmatter {
  title?: string
  description?: string
  permalink?: string
  [key: string]: string | undefined
}

/**
 * Extract frontmatter and content from markdown files
 */
function extractFrontmatter(filePath: string): { frontmatter: Frontmatter; content: string } {
  const content = fs.readFileSync(filePath, 'utf8')
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return { frontmatter: {}, content }
  }

  const frontmatter: Frontmatter = {}
  const frontmatterLines = match[1].split('\n')

  frontmatterLines.forEach((line) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim()
      let value = line.substring(colonIndex + 1).trim()

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }

      frontmatter[key] = value
    }
  })

  return { frontmatter, content: match[2] }
}

/**
 * Main function to generate social images for all content
 */
async function main(): Promise<void> {
  console.log('🎨 Generating social media images...\n')

  const contentDirs = [
    { dir: 'src/articles', type: 'article' as const },
    { dir: 'src/talks', type: 'talk' as const },
  ]

  // Root pages whose social images are referenced by the meta tags
  const rootPages = [
    { permalink: 'home', title: 'Callum Silcock', description: 'Principal Engineer (Front End) | I lead front end architectural change', type: 'page' as const },
    { permalink: 'articles', title: 'Articles', description: 'A collection of articles about emoji, react, macos, functional testing and more', type: 'page' as const },
    { permalink: 'talks', title: 'Talks', description: 'Talks presented at conferences, meetups and internal sessions', type: 'page' as const },
    { permalink: 'timeline', title: 'Timeline', description: 'All of the projects, jobs and contracts I have worked over the last decade', type: 'page' as const },
    { permalink: 'bookshelf', title: 'Bookshelf', description: 'Books I have read, in order of my personal rating', type: 'page' as const },
    { permalink: 'battery', title: 'Low Battery', description: 'Actionable strategies to preserve your cognitive capacity and mental energy', type: 'page' as const },
    { permalink: '404', title: 'Uh Oh...', description: 'It looks like you have hit the 404 page', type: 'page' as const },
  ]

  // Filter out directories that don't exist and process each
  const validDirs = contentDirs.filter(({ dir }) => {
    const dirPath = path.join(__dirname, '../', dir)
    if (!fs.existsSync(dirPath)) {
      console.log(`⚠️  Directory not found: ${dir}`)
      return false
    }
    return true
  })

  // Collect all image generation promises
  const images = validDirs.flatMap(({ dir, type }) => {
    const dirPath = path.join(__dirname, '../', dir)
    const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.md'))
    console.log(`📁 Processing ${files.length} ${type}s from ${dir}`)

    return files
      .map(file => {
        const filePath = path.join(dirPath, file)
        const { frontmatter } = extractFrontmatter(filePath)

        if (frontmatter.title && frontmatter.permalink) {
          return {
            title: frontmatter.title,
            description: frontmatter.description || `Read more on csi.lk`,
            permalink: frontmatter.permalink.replace('.html', ''),
            type,
          } as SocialImageData
        }
        console.log(`⚠️  Skipping ${file}: missing title or permalink`)
        return null
      })
      .filter((item): item is SocialImageData => item !== null)
  })

  images.push(...rootPages)
  console.log(`📄 Processing ${rootPages.length} root pages`)

  // Generate all images
  let browser: Awaited<ReturnType<typeof puppeteer.launch>>
  try {
    browser = await puppeteer.launch({ headless: true })
  } catch (error) {
    console.error(`❌ Puppeteer could not launch: ${error instanceof Error ? error.message : error}`)
    console.error(`   Social images require a headless Chrome. Check the Puppeteer install:`)
    console.error(`   yarn install puppeteer`)
    process.exit(1)
  }

  try {
    // Process sequentially to avoid launching a browser per image
    await images.reduce(
      (chain, data) =>
        chain.then(async () => {
          try {
            await generateSocialImage(data, browser)
          } catch (error) {
            console.error(
              `❌ Failed to generate social image for ${data.permalink}: ${error instanceof Error ? error.message : error}`,
            )
          }
        }),
      Promise.resolve(),
    )
  } finally {
    await browser.close()
  }

  console.log(`\n✨ Social media image generation complete!`)
  console.log(`📊 Generated ${images.length} social images`)
  console.log(`\n💡 Images are referenced in meta tags as:`)
  console.log(`   https://csi.lk/social/[permalink].png`)
  console.log(`\n🔍 Test your social previews at:`)
  console.log(`   • Facebook: https://developers.facebook.com/tools/debug/`)
  console.log(`   • Twitter: https://cards-dev.twitter.com/validator`)
  console.log(`   • LinkedIn: https://www.linkedin.com/post-inspector/`)
}

if (require.main === module) {
  main().catch(console.error)
}
