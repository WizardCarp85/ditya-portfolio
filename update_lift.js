const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === 'TableOfContents.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  const target = "hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)]";
  const replacement = "hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";
  
  if (content.includes(target)) {
     content = content.split(target).join(replacement);
     modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated lift in ${file}`);
  }
}
