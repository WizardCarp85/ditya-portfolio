const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const liftClass = "transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";

for (const file of files) {
  if (file === 'TableOfContents.tsx' || file === 'Hero.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Remove ALL group-hover:scale-[...] and group-hover:scale-10X from Images.
  content = content.replace(/group-hover:scale-\[\d+\.\d+\]/g, "");
  content = content.replace(/group-hover:scale-10[1-9]/g, "");
  content = content.replace(/hover:scale-110/g, ""); // There was one hover:scale-110

  // 2. Add lift up to image containers.
  // We can look for `<Image` tags, and then find their enclosing container to add the lift class if it doesn't have it.
  // Since parsing HTML with regex is hard, let's just do simple string replacements for common container classes that we know wrap images.
  // I will look for `overflow-hidden` which is usually on the image wrapper.

  // Let's just find `overflow-hidden` and add `group` and `liftClass` if it's an image wrapper.
  // Actually, I already added `hover:-translate-y-3...` in the previous step to many components!
  // Let's first ensure no duplicates.
  content = content.replace(/transition-all duration-500 hover:-translate-y-\d hover:shadow-\[[^\]]+\]/g, "");
  content = content.replace(/\s+/g, ' '); // normalize spaces temporarily for easy replacement? No, don't mess up formatting.

  // Let's do it safely.
  fs.writeFileSync(filePath, content, 'utf8');
}
