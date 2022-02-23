const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([optimizedImages], {
    target: 'serverless',
    devIndicators: {
        autoPrerender: false,
    },
})

// module.exports = {
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/i,
//             issuer: /\.[jt]sx?$/,
//             use: ['@svgr/webpack'],
//         })
//
//         return config
//     },
// }