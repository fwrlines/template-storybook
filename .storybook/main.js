const path=require('path')

const ADD_SCSS_LIB_TO_CONTEXT = '../src/scss'

module.exports = {
  webpackFinal: async (config, { configType }) => {
    /* `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
       You can change the configuration based on that.
       'PRODUCTION' is used when building the static version of storybook. */

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        {
          loader:'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, ADD_SCSS_LIB_TO_CONTEXT)]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    })

    // Return the altered config
    return config
  },
  stories: ['../src/stories/**/*.stories.(js|jsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
}
