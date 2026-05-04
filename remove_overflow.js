const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === 'TableOfContents.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Replace "overflow-hidden group" with just "group", but since we already changed it,
  // it might be "overflow-hidden group transition-all..."
  if (content.includes("overflow-hidden group")) {
      content = content.replace(/overflow-hidden group/g, "group rounded-sm"); // Keep rounded corners by applying it to the wrapper just in case
      modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed overflow-hidden in ${file}`);
  }
}
