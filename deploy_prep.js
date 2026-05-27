const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'frontend', 'src');

const replaceInFile = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;
    
    // Replace hardcoded strings with the environment variable logic
    content = content.replace(/'http:\/\/localhost:5001/g, "(import.meta.env.VITE_API_URL || 'http://localhost:5001') + '");
    content = content.replace(/"http:\/\/localhost:5001/g, "(import.meta.env.VITE_API_URL || 'http://localhost:5001') + \"");
    content = content.replace(/`http:\/\/localhost:5001/g, "`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated: ${filePath}`);
    }
};

const walkSync = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkSync(filePath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            replaceInFile(filePath);
        }
    }
};

console.log("Starting deployment preparation...");
walkSync(directoryPath);
console.log("Deployment preparation complete!");
