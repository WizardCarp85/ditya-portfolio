const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const regex = /transition-all duration-500 hover:-translate-y-[23] hover:shadow-\[[^\]]+\]\s*/g;

for (const file of files) {
  if (file === 'TableOfContents.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  if (regex.test(content)) {
      content = content.replace(regex, "");
      modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Wiped tailwind hover from ${file}`);
  }
}
