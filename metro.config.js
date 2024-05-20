// Import the default Expo Metro configuration
const { getDefaultConfig } = require('expo/metro-config');

// Get the default Metro configuration based on your project
const defaultConfig = getDefaultConfig(__dirname);

// Print existing asset extensions (optional step for debugging)
console.log('Existing asset extensions:', defaultConfig.resolver.assetExts);

// Ensure that common image extensions are included
const neededExtensions = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'svg', 'cjs', 'bin']; // Add 'cjs' or any custom extensions you need

// Filter out any already included extensions to avoid duplicates
neededExtensions.forEach(ext => {
    if (!defaultConfig.resolver.assetExts.includes(ext)) {
        defaultConfig.resolver.assetExts.push(ext);
    }
});

// Export the updated configuration
module.exports = defaultConfig;