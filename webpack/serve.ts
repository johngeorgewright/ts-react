import { Configuration } from 'webpack'
import 'webpack-dev-server'

const config: Configuration = {
  devServer: {
    hot: true,
    static: {
      directory: './dist',
    },
  },
}

export default config
