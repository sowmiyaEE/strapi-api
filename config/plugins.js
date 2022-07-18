module.exports = {
  'my-plugin': {
    enabled: true,
    resolve: './src/plugins/my-plugin' // path to plugin folder
  },
  'rest-cache': {
    config: {
      provider: {
        // name can be an alias:
        /*
        name: "my-provider", // try to require 'strapi-provider-rest-cache-my-provider'
        // a full package name:
        */
        name: "strapi-provider-rest-cache-memory", // try to require '@org/my-cache-provider'
        // provider options
        getTimeout: 500, // in milliseconds (default: 500)
        options: {},
      },
      strategy: {
        // ...
        debug:true,
        clearRelatedCache:true,
        resetOnStartup:false,
        contentTypes: ["api::product-list.product-list","plugin::my-plugin.product"],
        hitpass:({ctx})=>{  console.log(ctx);  return false; }
      },
    },
  }
}
