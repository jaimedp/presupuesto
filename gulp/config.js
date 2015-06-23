'use strict';

var path = require('path');
var distFolder = './dist';

module.exports = {

    distFolder: distFolder,

    browserify: {
        entries: './src/client/js/main.js'
    },

    webserver: {
        root: distFolder
    },

    less: {
        src: './src/client/css/**/**.less',
        dest: path.join(distFolder, 'css')
    }
};