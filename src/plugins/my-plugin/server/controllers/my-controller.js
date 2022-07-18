'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('my-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
  async start(ctx) {
    const a  =await strapi
    	.plugin('my-plugin')
    	.service('dataService')
    	.getList();
    console.log(a);
    ctx.body  = a;
  },
  async storeContent(ctx) {

   let s = ctx.request.body;
   console.log(s);
   s = await strapi
    .service('api::car.car')
    .create(s);
    ctx.body = s;
  }
};
