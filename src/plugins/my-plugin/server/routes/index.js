module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
       auth:false,
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/products',
    handler: 'product.index',
    config: {
       auth:false,
      policies: [],
    },
  },
  {
    method:"GET",
    path: '/list',
    handler: 'myController.start',
    config: {
        auth: false,
    	policies: []
    }
  },
  {
    method:"POST",
    path: '/addnew',
    handler: 'myController.storeContent',
    config: {
        auth: false,
    	policies: [],
    	middlewares: [
    	 /* async(ctx, next)=>{
    	    if(ctx.request){
    	      if(ctx.request.name && ctx.request.descripto) {
    	        next();
    	      }
    	    }
    	  }*/
    	]
    }
  }
];
