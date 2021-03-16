import { Configuration } from 'webpack'

const config: Configuration = {
  devServer: {
    contentBase: './dist',
    hot: true,
  },
}

export default config
