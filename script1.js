const fs = require('fs');
const path = require('path');

// Define the project directory
const projectDir = 'carpooling-app-backend';

// Define the folder and file structure
const folderStructure = {
    src: ['index.js', 'config.js', 'schema.graphql'],
    'src/resolvers': ['userResolver.js', 'rideResolver.js'],
    'src/models': ['User.js', 'Ride.js'],
    'src/routes': ['userRoutes.js', 'rideRoutes.js'],
    'src/middleware': ['authentication.js'],
    migrations: [],
    seeds: [],
};

// Create the project directory
if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir);
}

// Create folders and files
function createFoldersAndFiles(basePath, structure) {
    for (const item in structure) {
        const fullPath = path.join(basePath, item);

        if (fs.statSync(basePath).isDirectory()) {
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath);
            }

            if (structure[item].length > 0) {
                structure[item].forEach((file) => {
                    const filePath = path.join(fullPath, file);
                    fs.writeFileSync(filePath, '', 'utf8');
                });
            }

            if (Object.keys(structure[item]).length > 0) {
                createFoldersAndFiles(fullPath, structure[item]);
            }
        }
    }
}

createFoldersAndFiles(projectDir, folderStructure);

// Create .env, package.json, package-lock.json, .gitignore
fs.writeFileSync(path.join(projectDir, '.env'), '', 'utf8');
fs.writeFileSync(path.join(projectDir, 'package.json'), '{}', 'utf8');
fs.writeFileSync(path.join(projectDir, 'package-lock.json'), '{}', 'utf8');
fs.writeFileSync(
    path.join(projectDir, '.gitignore'),
    `
node_modules
.env
`,
    'utf8'
);

console.log('Folder structure created successfully!');
