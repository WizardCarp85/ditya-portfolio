const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const dupString = "transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";
const singleString = "transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(dupString)) {
    content = content.split(dupString).join(singleString);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
