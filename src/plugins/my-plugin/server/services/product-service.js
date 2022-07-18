'use strict';

module.exports = ({ strapi }) => ({
 async getAll() {
    let data = await strapi.entityService.findMany('plugin::my-plugin.product',
    {populate: {
       my_plugin_images:  {populate:{image:{populate:{image:true}}}} }});
    
    let imageData = await strapi.entityService.findMany('plugin::my-plugin.image',{populate:{image:true}});
    console.log(imageData);
    return data;
  },
});
