const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const liftClass = "transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";

for (const file of files) {
  if (file === 'TableOfContents.tsx' || file === 'Hero.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the old zoom in transitions from Image classes
  content = content.replace(/group-hover:scale-\[1\.\d\d\]/g, "");
  content = content.replace(/group-hover:scale-105/g, "");
  content = content.replace(/hover:scale-110/g, ""); 

  // Safely add liftClass to container divs. 
  // We can look for "overflow-hidden group" and append the liftClass.
  // There are some places that might just be "group" or might not have "overflow-hidden".
  // Let's replace `group-hover:scale...` with `liftClass`? No, liftClass needs to be on the parent container.
  
  content = content.replace(/overflow-hidden group"/g, `overflow-hidden group ${liftClass}"`);
  content = content.replace(/overflow-hidden group /g, `overflow-hidden group ${liftClass} `);
  
  // Some images in SpaceDesign use "group" without "overflow-hidden", like `className="relative group"`
  content = content.replace(/className="relative group"/g, `className="relative group overflow-hidden ${liftClass}"`);
  
  // Services has `className="flex flex-col items-center gap-4 group"`
  content = content.replace(/gap-4 group"/g, `gap-4 group ${liftClass}"`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Updated", file);
}
