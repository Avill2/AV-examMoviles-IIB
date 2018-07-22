/**
 * Auto.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    chasis:{
      type:"number"
    },
    nombre:{
      type:"string"
    },
    nombreModelo:{
      type:"string"
    },
    precio:{
      type:"string"
    },
    color:{
      type:"string"},
    anio:{
      type:"number"
    },
    conductorId:{
      type:"number"
    },

  },
};
