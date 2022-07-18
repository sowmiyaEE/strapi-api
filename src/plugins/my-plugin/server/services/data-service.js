'use strict';

module.exports = ({strapi}) => ({
  async getList(){
   const listOfCars = await strapi.service('api::car.car').find({});
   return listOfCars;
  }
})

