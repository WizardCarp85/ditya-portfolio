const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === 'TableOfContents.tsx') continue; // skip the one we just did
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let modified = false;

  // Regex to find: className="... group ..." for the container
  // And the subsequent Image tag with group-hover:scale-[...]
  // Since it's hard to safely regex over multiple lines, let's just do two passes.
  
  // Pass 1: Make Image zoom much subtler (or remove it) and keep transition
  content = content.replace(/group-hover:scale-\[1\.\d+\]/g, () => {
      modified = true;
      return "group-hover:scale-[1.02]";
  });
  content = content.replace(/group-hover:scale-105/g, () => {
      modified = true;
      return "group-hover:scale-[1.02]";
  });
  content = content.replace(/group-hover:scale-106/g, () => {
      modified = true;
      return "group-hover:scale-[1.02]";
  });

  // Pass 2: Add lift up to the container. The container usually has "overflow-hidden group" or just "group".
  // Let's replace " overflow-hidden group" with " overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)]"
  // Wait, if we use `hover:-translate-y-2`, we don't need `group-hover` for the container itself.
  content = content.replace(/ overflow-hidden group"/g, () => {
      modified = true;
      return " overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)]\"";
  });
  
  content = content.replace(/ overflow-hidden group /g, () => {
      modified = true;
      return " overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] ";
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
