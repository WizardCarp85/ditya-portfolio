const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const liftClass = "transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";

for (const file of files) {
  if (file === 'TableOfContents.tsx' || file === 'Hero.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add the lift class to any div that has 'overflow-hidden' and wraps an image
  // It's safest to just replace "overflow-hidden" with "overflow-hidden liftClass" where it's part of an image gallery.
  // Actually, not all overflow-hidden are images. 
  // Let's use a regex to find className="... overflow-hidden ..." right before <Image
  
  // A safer approach:
  // If a className has `overflow-hidden` and it's near an `<Image`, add the class.
  // We can just add it to any `overflow-hidden group` since `group` is only used for images.
  content = content.replace(/overflow-hidden group(?!.*hover:-translate-y-3)/g, `overflow-hidden group ${liftClass}`);
  
  // Clean up any double spaces
  content = content.replace(/  +/g, ' ');

  fs.writeFileSync(filePath, content, 'utf8');
}
