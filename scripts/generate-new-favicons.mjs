import fs from "fs";
import path from "path";
import sharp from "sharp";

const sourcePath = "C:/Users/BishnaChauhan/.gemini/antigravity/brain/a3ea3317-cf9a-4d5c-90a2-c5a9ee4a6895/brc_new_logo.jpg";
const projectRoot = "d:/AI App/BRC-Web/brc-platform-main";
const publicDir = path.join(projectRoot, "public");
const appDir = path.join(projectRoot, "src/app");

async function removeWhiteBackground(sharpInstance, threshold = 245) {
  const { data, info } = await sharpInstance.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    rgba[dstIdx] = r;
    rgba[dstIdx + 1] = g;
    rgba[dstIdx + 2] = b;

    // Calculate whiteness
    // If close to white, make transparent with smooth falloff
    const brightness = (r + g + b) / 3;
    const minC = Math.min(r, g, b);

    if (minC >= 250 && brightness >= 250) {
      rgba[dstIdx + 3] = 0; // Pure transparent
    } else if (minC >= 235 && brightness >= 235) {
      // Smooth anti-aliased edge
      const alpha = Math.max(0, Math.min(255, Math.round((255 - brightness) * (255 / 20))));
      rgba[dstIdx + 3] = alpha;
    } else {
      rgba[dstIdx + 3] = 255; // Fully opaque
    }
  }

  return sharp(rgba, { raw: { width, height, channels: 4 } }).png();
}

function int32ToBytes(num) {
  return [num & 0xff, (num >> 8) & 0xff, (num >> 16) & 0xff, (num >> 24) & 0xff];
}

async function run() {
  console.log("Reading source image...");
  const rawSource = sharp(sourcePath);

  // 1. Extract chevron symbol alone (X: 245 to 760, Y: 325 to 695)
  const chevronCrop = rawSource.clone().extract({
    left: 245,
    top: 325,
    width: 515,
    height: 370
  });

  const transparentChevron = await removeWhiteBackground(chevronCrop);

  // Make square 512x512 with padding
  const squareSymbol = await transparentChevron
    .resize(460, 330, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 91,
      bottom: 91,
      left: 26,
      right: 26,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .resize(512, 512)
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, "brc-star-symbol.png"), squareSymbol);
  console.log("Saved public/brc-star-symbol.png");

  // 2. Extract full logo (chevron + text)
  const fullCrop = rawSource.clone().extract({
    left: 240,
    top: 325,
    width: 540,
    height: 485
  });
  const transparentFull = await removeWhiteBackground(fullCrop);
  const fullLogoBuf = await transparentFull.png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "brc-star-logo.png"), fullLogoBuf);
  console.log("Saved public/brc-star-logo.png");

  // 3. Generate icon.png (32x32)
  const icon32 = await sharp(squareSymbol).resize(32, 32, { kernel: "lanczos3" }).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "icon.png"), icon32);
  fs.writeFileSync(path.join(appDir, "icon.png"), icon32);
  console.log("Saved 32x32 icon.png");

  // 4. Generate favicon.ico (32x32 wrapped in ICO container)
  const icoHeader = Buffer.from([
    0, 0,
    1, 0,
    1, 0,
    32,
    32,
    0,
    0,
    1, 0,
    32, 0,
    ...int32ToBytes(icon32.length),
    ...int32ToBytes(22)
  ]);
  const icoBuffer = Buffer.concat([icoHeader, icon32]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);
  console.log("Saved favicon.ico");

  // 5. Generate apple-icon.png (180x180)
  const apple180 = await sharp(squareSymbol).resize(180, 180, { kernel: "lanczos3" }).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "apple-icon.png"), apple180);
  fs.writeFileSync(path.join(appDir, "apple-icon.png"), apple180);
  console.log("Saved apple-icon.png");

  // 6. Generate icon-192.png
  const icon192 = await sharp(squareSymbol).resize(192, 192, { kernel: "lanczos3" }).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "icon-192.png"), icon192);
  console.log("Saved icon-192.png");

  // 7. Generate icon-512.png
  fs.writeFileSync(path.join(publicDir, "icon-512.png"), squareSymbol);
  console.log("Saved icon-512.png");

  console.log("All brand assets and favicons generated successfully!");
}

run().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
