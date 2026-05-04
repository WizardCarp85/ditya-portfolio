const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === 'TableOfContents.tsx') continue;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Remove the broken Tailwind hover classes
  const badClass = "transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]";
  if (content.includes(badClass)) {
      content = content.split(badClass).join("");
      modified = true;
  }
  
  // 2. Add whileHover to the motion.divs that have viewport={{ once: true ... }} and are group wrappers.
  // Actually, any motion.div that has `variants={scaleReveal}` or `group` should get it.
  // The safest way is to regex replace `viewport={{ once: true, margin: "-...px" }}` with `viewport={{ once: true, margin: "-...px" }} whileHover={{ y: -12, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25)" }}` ONLY on the ones we care about.
  // Since we know the affected ones had `group` in their className, let's just do a manual replace or regex.
  // Wait, the safest way is to find `<motion.div` ... `className="...group..."` and insert `whileHover`.
  
  // Let's just do a simple string replacement for the most common viewport props:
  // viewport={{ once: true, margin: "-80px" }}
  // viewport={{ once: true, margin: "-60px" }}
  
  // But we only want to add it if it's an image card. Image cards have `group` in their className.
  
  // Let's use a regex that finds <motion.div ... className="... group ..."> and adds whileHover.
  content = content.replace(/(<motion\.div[^>]*className="[^"]*\bgroup\b[^"]*"[^>]*)>/g, (match, p1) => {
      // If it already has whileHover, skip
      if (p1.includes('whileHover=')) return match;
      modified = true;
      return p1 + ' whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}>';
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added whileHover in ${file}`);
  }
}
