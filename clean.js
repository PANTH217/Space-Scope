const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, 'frontend', 'src'),
    path.join(__dirname, 'backend', 'models'),
    path.join(__dirname, 'backend', 'routes'),
    path.join(__dirname, 'backend', 'server.js')
];

function cleanFile(filePath) {
    if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf-8');

    // Remove JSX comments: {/* comment */}
    content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
    
    // Remove block comments: /* comment */
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Remove line comments, strictly avoiding URLs like http:// or https://
    // This looks for // that is NOT preceded by : and removes until end of line
    content = content.replace(/(?<!:)\/\/.*$/gm, '');

    // Remove empty lines (lines with only whitespace)
    content = content.replace(/^\s*[\r\n]/gm, '');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Cleaned: ${filePath}`);
}

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const stat = fs.statSync(dir);
    if (stat.isFile()) {
        cleanFile(dir);
        return;
    }

    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === 'dist' || file === 'build' || file === 'assets') continue;
        walkDir(path.join(dir, file));
    }
}

console.log("Starting codebase cleanup...");
for (const dir of targetDirs) {
    walkDir(dir);
}
console.log("Cleanup complete!");
