import { generateHTML } from './utils/htmlGenerator';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function build() {
  console.log('🏗️ Building landing page...');
  
  try {
    // Generar HTML
    const html = generateHTML();
    
    // Leer CSS existente
    const cssPath = join(process.cwd(), 'styles', 'main.css');
    const css = readFileSync(cssPath, 'utf8');
    
    // Escribir HTML generado
    const outputPath = join(process.cwd(), 'index.html');
    writeFileSync(outputPath, html);
    
    console.log('✅ Landing page built successfully!');
    console.log(`📁 Output: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
