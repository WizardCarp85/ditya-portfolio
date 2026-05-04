const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const dupString = "transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";

for (const file of files) {
  if (file === 'TableOfContents.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix duplicates: Replace two occurrences with one.
  const doubleDup = dupString + " " + dupString;
  while(content.includes(doubleDup)) {
      content = content.replace(doubleDup, dupString);
      modified = true;
  }
  
  // What if there are multiple separated by other things?
  // Let's just do a regex replace to clean up className attributes.
  // Actually, we can just replace all instances of dupString with an empty string first,
  // then re-insert it safely!
  
  // Wait, if we remove it completely, we won't know WHERE to put it back.
  // The right place is inside the className where `group` exists.
  
  // Let's write a simple clean up for duplicates
  const doubleDup2 = dupString + " transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";
  if (content.includes(doubleDup2)) {
      content = content.split(doubleDup2).join(dupString);
      modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned ${file}`);
  }
}
