'use strict';

/**
 * product-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-list.product-list',({strapi})=>({
  
   async getAll(filters) {
    let data = await strapi.service('api::product-list.product-list').find(
    { filters:filters,
      populate: {
       my_plugin_images:  {populate:{image:{populate:{image:true}}}} }});
    /*
    let imageData = await strapi.entityService.findMany('plugin::my-plugin.image',{populate:{image:true}});
    console.log(imageData);
    */
    return data;
   },
  })

);


