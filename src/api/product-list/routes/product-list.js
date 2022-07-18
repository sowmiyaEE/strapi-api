'use strict';

/**
 * product-list router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product-list.product-list',{
  only: ['find','findOne'],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    }
  }
  
});
