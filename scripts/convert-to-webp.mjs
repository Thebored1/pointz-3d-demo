import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const roots = [
  'public/images',
  'public/assets',
  'public',
];

const skipDirs = new Set(['frames']); // convert frames separately for progress reporting

async function convertFile(full) {
  const ext = path.extname(full).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;
  const out = full.slice(0, -ext.length) + '.webp';
  if (fs.existsSync(out)) {
    const inStat = fs.statSync(full);
    const outStat = fs.statSync(out);
    if (outStat.mtimeMs >= inStat.mtimeMs) return 'skip';
  }
  await sharp(full).webp({ quality: 80 }).toFile(out);
  return out;
}

async function walk(dir, { includeFrames = false } = {}) {
  if (!fs.existsSync(dir)) return { converted: 0, skipped: 0 };
  let converted = 0;
  let skipped = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!includeFrames && skipDirs.has(entry.name)) continue;
      const nested = await walk(full, { includeFrames });
      converted += nested.converted;
      skipped += nested.skipped;
      continue;
    }
    const result = await convertFile(full);
    if (result === 'skip') skipped += 1;
    else if (result) {
      converted += 1;
      if (converted % 25 === 0) console.log(`… ${converted} converted`);
    }
  }
  return { converted, skipped };
}

const includeFrames = process.argv.includes('--frames');
console.log(`Converting images${includeFrames ? ' (including frames)' : ''}…`);

let totalC = 0;
let totalS = 0;
for (const root of roots) {
  // Avoid double-walking public/assets and public/images when walking public
  if (root === 'public') {
    for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
      if (entry.isDirectory()) continue;
      const full = path.join(root, entry.name);
      const result = await convertFile(full);
      if (result === 'skip') totalS += 1;
      else if (result) totalC += 1;
    }
    continue;
  }
  const { converted, skipped } = await walk(root, { includeFrames: false });
  totalC += converted;
  totalS += skipped;
}

if (includeFrames) {
  const { converted, skipped } = await walk('public/assets/frames', { includeFrames: true });
  totalC += converted;
  totalS += skipped;
}

console.log(`Done. Converted: ${totalC}, skipped (up to date): ${totalS}`);
