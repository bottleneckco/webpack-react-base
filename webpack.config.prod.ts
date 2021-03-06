import { merge } from 'webpack-merge';

import baseConfig from './webpack.config';

const config = merge(baseConfig, {
  devtool: 'hidden-source-map',
  mode: 'production',
});

export default config;
