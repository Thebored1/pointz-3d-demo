import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const mappings = [
  {
    src: 'public/images/new2kimages/Moffett_truck_in_logistics_yard_202608052241.jpeg',
    targets: [
      'public/images/moffett-yard-rear.webp',
      'public/images/moffett-yard-rear.jpg',
    ]
  },
  {
    src: 'public/images/new2kimages/Fleet_manager_inspecting_trucks_2K_202608060451.jpeg',
    targets: [
      'public/images/about-fleet-lineup.webp',
      'public/images/about-fleet-lineup.jpg',
      'public/images/fleet-1.webp',
      'public/images/fleet-hero.webp',
    ]
  },
  {
    src: 'public/images/new2kimages/Fleet_manager_inspecting_trucks_2K_202608060452.jpeg',
    targets: [
      'public/images/home-fleet-manager.webp',
      'public/images/home-fleet-manager.jpg',
    ]
  },
  {
    src: 'public/images/new2kimages/Truck_on_highway_advertisement_2K_202608052117.jpeg',
    targets: [
      'public/images/flatbed-highway-ad.webp',
      'public/images/flatbed-highway-ad.jpg',
    ]
  }
];

async function run() {
  for (const item of mappings) {
    if (!fs.existsSync(item.src)) {
      console.error(`Source missing: ${item.src}`);
      continue;
    }
    const metadata = await sharp(item.src).metadata();
    console.log(`Processing ${path.basename(item.src)} (${metadata.width}x${metadata.height})`);

    for (const target of item.targets) {
      const ext = path.extname(target).toLowerCase();
      if (ext === '.webp') {
        await sharp(item.src).webp({ quality: 88 }).toFile(target);
      } else if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(item.src).jpeg({ quality: 90 }).toFile(target);
      }
      const stat = fs.statSync(target);
      console.log(`  -> Wrote ${target} (${(stat.size / 1024).toFixed(1)} KB)`);
    }
  }
  console.log('All 2K images successfully converted and replaced!');
}

run().catch(console.error);
