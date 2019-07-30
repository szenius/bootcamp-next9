require('reflect-metadata');

const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
    sassLoaderOptions: {
        includePaths: [path.resolve(__dirname, './app/styles')]
    },
    webpack: (config) => {
        config.resolve.alias['app'] = path.join(__dirname, 'app');
        config.resolve.alias['server'] = path.join(__dirname, 'server');
        return config;
    }
});