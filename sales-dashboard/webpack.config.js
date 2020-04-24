const assets = require('webpack-assets-manifest');

module.exports = {
    output: {
        jsonpFunction: 'fruitGalleryJsonp'
    },
    plugins: [
        new assets({
            writeToFileEmit: true,
            sortManifest: function (a, b) {
                if (b === 'main.js') return -1;
            }
        })
    ]
};
