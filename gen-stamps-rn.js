const fs = require('fs');
const path = require('path');

const stampsDir = path.join(__dirname, 'app/assets/images/stamps');

function toPascalCase(filename) {
  return filename.replace('&', 'ampersand').split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

function processFile(filePath, svgTypeImport, colorsImport) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const baseName = path.basename(filePath, '.svg');
  const componentName = toPascalCase(baseName);

  const vbMatch = raw.match(/viewBox="([^"]+)"/);
  const viewBox = vbMatch ? vbMatch[1] : '0 0 100 100';
  const parts = viewBox.split(/\s+/);
  const vw = parts[2], vh = parts[3];

  // Extract color map from <style> block
  const colorMap = {};
  const styleMatch = raw.match(/<style>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    const clsMatches = [...styleMatch[1].matchAll(/\.(cls-\d+)\s*\{[^}]*fill\s*:\s*([^;}\s]+)/g)];
    clsMatches.forEach(([, cls, fill]) => { colorMap[cls] = fill.trim(); });
  }
  const secondaryClasses = Object.keys(colorMap).filter(c => c !== 'cls-1');

  // Strip <defs>, outer <svg> wrapper
  let inner = raw
    .replace(/<defs>[\s\S]*?<\/defs>/g, '')
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>[\s\S]*$/, '')
    .trim();

  // Remove all cls-* classes (all paths inherit fill from G)
  inner = inner.replace(/\s*class="cls-\d+"/g, '');

  // Remove Illustrator-specific attributes
  inner = inner.replace(/\s*data-name="[^"]*"/g, '');
  inner = inner.replace(/\s*id="Layer_\d+"/g, '');

  // Convert SVG element names to RN SVG component names
  inner = inner.replace(/<path/g, '<Path').replace(/<\/path>/g, '</Path>');
  inner = inner.replace(/<polygon/g, '<Polygon').replace(/<\/polygon>/g, '</Polygon>');
  inner = inner.replace(/<g(\s)/g, '<G$1').replace(/<\/g>/g, '</G>');

  const usedComponents = ['Svg', 'Defs', 'Filter', 'FeDropShadow', 'G'];
  if (inner.includes('<Path')) usedComponents.push('Path');
  if (inner.includes('<Polygon')) usedComponents.push('Polygon');

  const output = [
    "import { " + usedComponents.join(', ') + " } from 'react-native-svg';",
    "import { SVGProps } from '" + svgTypeImport + "';",
    "import { colors } from '" + colorsImport + "';",
    "",
    "export const " + componentName + " = ({",
    "  width = " + vw + ",",
    "  height = " + vh + ",",
    "  color = colors.stamp,",
    "  sizeRatio = 1,",
    "}: SVGProps) => (",
    "  <Svg",
    "    width={width * sizeRatio}",
    "    height={height * sizeRatio}",
    '    viewBox="' + viewBox + '"',
    "  >",
    "    <Defs>",
    '      <Filter id="shadow">',
    '        <FeDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor={colors.white15} />',
    "      </Filter>",
    "    </Defs>",
    '    <G fill={color} filter="url(#shadow)">',
    inner.split('\n').map(l => '      ' + l).join('\n'),
    "    </G>",
    "  </Svg>",
    ");",
    ""
  ].join('\n');

  const outPath = filePath.replace('.svg', '.tsx');
  fs.writeFileSync(outPath, output);
  console.log('  ✓ ' + componentName + ' -> ' + path.basename(outPath));
}

// Process lollipop stamps
let count = 0;
const lollipopFiles = fs.readdirSync(stampsDir).filter(f => f.endsWith('.svg'));
console.log('Processing ' + lollipopFiles.length + ' lollipop stamps...');
lollipopFiles.forEach(f => {
  processFile(path.join(stampsDir, f), '../svg.type', '../../../utils/colors');
  count++;
});

// Process symbol stamps
const symbolsDir = path.join(stampsDir, 'symbols');
const symbolFiles = fs.readdirSync(symbolsDir).filter(f => f.endsWith('.svg'));
console.log('Processing ' + symbolFiles.length + ' symbol stamps...');
symbolFiles.forEach(f => {
  processFile(path.join(symbolsDir, f), '../../svg.type', '../../../../utils/colors');
  count++;
});

console.log('\nDone! Generated ' + count + ' components.');
