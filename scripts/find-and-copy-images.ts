import fastGlob from 'fast-glob'
import { existsSync, mkdirSync, readdirSync, copyFileSync } from 'fs'
import { join } from 'path'

const distDir = 'dist/images';

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

fastGlob('src/**/images', { onlyDirectories: true })
  .then(imageDirs => {
    imageDirs.forEach(imageDir => {
      const files = readdirSync(imageDir);
      files.forEach(file => {
        const srcPath = join(imageDir, file);
        const distPath = join(distDir, file);
        copyFileSync(srcPath, distPath);
        console.log(`Copied ${srcPath} to ${distPath}`);
      });
    })
  })
  .catch(err => {
    console.error(`Error finding directories: ${err}`);
  });
