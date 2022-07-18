'use strict';

/**
 * capital service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::capital.capital');
