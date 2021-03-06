const path = require('path');
process.env.rootPath = path.resolve(__dirname, '../../');

const { NODE_ENV: env } = process.env;
const { DIR } = require('../configs/paths')
const { options } = require('../configs/options');
let config;

if (env === 'production') {
    config = require('./webpack.config.prod.js');

}
else if (env === 'development')
    config = require('./webpack.config.dev.js');
else {
    console.log(`NODE_ENV should either be 'production' or 'development' but was ${process.env.NODE_ENV}`);
    process.exit(1);
}

module.exports = config;
