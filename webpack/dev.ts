import merge from 'webpack-merge'
import common from './common'
import serve from './serve'

export default merge(common, serve, {
  entry: {
    'ts-react': ['react-hot-loader/patch', './src/index.tsx'],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
})
