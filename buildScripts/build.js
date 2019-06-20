/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for prod. This may take time...'));

webpack(webpackConfig).run((err, status) => {
  if (err) { // So a fata error occurred. Stop here.
    console.log(chalk.red(err));
    return 1;
  }
  return 0;
});
