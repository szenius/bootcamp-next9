const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
    sassLoaderOptions: {
        includePaths: [path.resolve(__dirname, './app/styles')]
    },
    webpack: (config, options) => {
        config.resolve.alias['app'] = path.join(__dirname, 'app')
        return config;
    }
});