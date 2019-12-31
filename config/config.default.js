/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_';

  // debug 为 true 时，用于本地调试
  config.debug = true;

  // add your middleware config here
  config.middleware = ['errorHandler'];

  config.security = {
    csrf: {
      enable: false,
    }
  };

  config.mongoose = {
    url: 'mongodb://localhost:27017/mydb',
    options: {},
  };


  config.passwordLocal = {
    usernameField: 'username',
    passwordField: 'password'
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
