'use strict';

/**
 *  product-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product-list.product-list',({strapi})=>({

  async list(ctx) {
    let filters = ctx.query;
    let data = await strapi.service('api::product-list.product-list').getAll(filters);    
    let results  = [];
    for await ( var d of data.results){
      const caption = await strapi.entityService.findOne('api::product-list.product-caption', d.name, {});
      if(caption){
        d.caption = caption.text;
      }
      else{
        d.caption= '';
      }
      results.push(d);
    }
    data.results = results;
    return data;
  },  
  
  async getOne(ctx){
    const {id} = ctx.params;
    let product =  await strapi.service('api::product-list.product-list').findOne(
    	id,{
    	populate: {my_plugin_images:  {populate:{image:{populate:{image:true}}}} }
    });
     const caption = await strapi.entityService.findOne('api::product-list.product-caption', product.name, {});
     product.caption = caption?.text;
     return product;
  }   
    
})
);
