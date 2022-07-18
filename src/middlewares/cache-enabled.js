'use strict';

/**
 * `cache-enabled` middleware.
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In cache-enabled middleware.');

    await next();
  };
};
