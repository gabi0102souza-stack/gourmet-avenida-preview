const sharp = require('C:/Users/Gabriel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const path = require('node:path');
(async () => {
 const sources = [['buffet','more-4.jpg'],['saladas','more-3.jpg'],['salao','photo-0.jpg']];
 for (const [name,file] of sources) {
  for (const width of [640,1200]) {
   const input=path.join('assets','research',file);
   await sharp(input).resize({width,withoutEnlargement:true}).webp({quality:78,effort:5}).toFile(`assets/images/${name}-${width}.webp`);
   await sharp(input).resize({width,withoutEnlargement:true}).avif({quality:50,effort:4}).toFile(`assets/images/${name}-${width}.avif`);
  }
 }
})();
