module.exports = {
    siteMetadata: {
        title: 'Alfa Móveis'
    }, 

    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                printRejected: true,
                tailwind: true
            }
        }
    ]
}