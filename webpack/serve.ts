import { Configuration } from 'webpack'

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
