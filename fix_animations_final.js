const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const liftClass = " transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";

for (const file of files) {
  if (file === 'TableOfContents.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Completely remove all inner image zoom (scale)
  content = content.replace(/group-hover:scale-\[1\.\d+\]/g, '');
  content = content.replace(/group-hover:scale-105/g, '');
  content = content.replace(/group-hover:scale-106/g, '');

  // 2. Ensure all image containers have the liftClass.
  // We identify image containers if they have "overflow-hidden" or "relative" AND "group", and they wrap an <Image
  // Instead of a complex regex, we can just find any `className="...group..."` that precedes `<Image` and ensure it has liftClass.
  // Actually, easiest is to just find all occurrences of 'group' that don't have liftClass, and if they are image containers, add it.
  
  // Let's strip the existing liftClass first to avoid duplicates
  content = content.split(liftClass).join('');
  const oldLiftClass = " transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)]";
  content = content.split(oldLiftClass).join('');

  // Now selectively add liftClass to any div that has "group" AND "overflow-hidden"
  content = content.replace(/overflow-hidden group"/g, `overflow-hidden group${liftClass}"`);
  content = content.replace(/overflow-hidden group /g, `overflow-hidden group${liftClass} `);
  
  // Also some might just be "group" without overflow-hidden, but we usually used overflow-hidden.
  // Let's check SpaceDesign.tsx, some might be "group shadow-md..."
  content = content.replace(/group shadow-md/g, `group${liftClass} shadow-md`);
  content = content.replace(/group cursor-pointer/g, `group${liftClass} cursor-pointer`);

  if (content !== originalContent) {
    // clean up any multiple spaces
    content = content.replace(/  +/g, ' ');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed animations in ${file}`);
  }
}
