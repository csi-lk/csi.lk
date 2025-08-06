import fastGlob from 'fast-glob'
import { existsSync, mkdirSync, readdirSync, copyFileSync, statSync } from 'fs'
import { join, relative } from 'path'

const baseDistDir = 'dist';

fastGlob('src/**/images/**', { onlyDirectories: true })
  .then(imageDirs => {
    imageDirs.forEach(imageDir => {
      // Calculate the path relative to src/ but map talks/images to just images in dist
      const relativePath = relative('src', imageDir);
      const distPath = relativePath.startsWith('talks/images/') 
        ? join(baseDistDir, 'images', relativePath.replace('talks/images/', ''))
        : join(baseDistDir, relativePath);
      
      // Create the destination directory if it doesn't exist
      if (!existsSync(distPath)) {
        mkdirSync(distPath, { recursive: true });
      }
      
      const files = readdirSync(imageDir);
      files.forEach(file => {
        const srcFilePath = join(imageDir, file);
        const distFilePath = join(distPath, file);
        
        // Only copy if it's a file, not a directory
        if (statSync(srcFilePath).isFile()) {
          copyFileSync(srcFilePath, distFilePath);
          console.log(`Copied ${srcFilePath} to ${distFilePath}`);
        }
      });
    })
  })
  .catch(err => {
    console.error(`Error finding directories: ${err}`);
  });
