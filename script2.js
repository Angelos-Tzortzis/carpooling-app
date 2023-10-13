const fs = require('fs');
const path = require('path');

// Define the folder structure
const structure = [
    'carpooling-app-frontend',
    'carpooling-app-frontend/lib',
    'carpooling-app-frontend/screens',
    'carpooling-app-frontend/components',
    'carpooling-app-frontend/store',
];

// Create the folders
structure.forEach((folder) => {
    const folderPath = path.join(__dirname, folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
});

// Create the empty files
const files = [
    'main.dart',
    'HomeScreen.dart',
    'ProfileScreen.dart',
    'RideCard.dart',
    'MapView.dart',
    'app_state.dart',
    'actions.dart',
    'reducers.dart',
    '.env',
    'pubspec.yaml',
];

// Create empty files in the respective folders
structure.forEach((folder) => {
    files.forEach((file) => {
        const filePath = path.join(__dirname, folder, file);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
        }
    });
});

console.log('Folder structure and files created successfully.');

