import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  devServer: {
    hot: true,
    // @ts-ignore This is new in webpack-dev-server@v4
    // but it is yet to be included in @types/webpack-dev-server
    static: {
      directory: './dist',
    },
  },
}

export default config
