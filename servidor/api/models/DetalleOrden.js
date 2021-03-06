/**
 * Detalle-orden.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    precio:{type: "number"},

    autos:{
      model: 'Auto'
    },

    ordenId:{
      model: 'orden'
      //unique: true
    }
  },
};
