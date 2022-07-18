module.exports = {
  routes:[
    {
    method: 'GET',
    path: '/product-lists/catalogue',
    handler: 'product-list.list',
    config: {
       auth:false,
      policies: []
    },
    },
    {
     method: 'GET',
     path:  '/product-lists/product/:id',
     handler: 'product-list.getOne',
     config: {
       auth:false,
      policies: [],
    }
    }
  ]
}
