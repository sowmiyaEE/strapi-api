'use strict';

module.exports = {
  async index(ctx) {
    ctx.body = await strapi
      .plugin('my-plugin')
      .service('productService')
      .getAll();
  }
};
