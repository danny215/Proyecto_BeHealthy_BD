/**
 * Datos.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:"string"
    },
    apellido:{
      type:"string"
    },
    fechaUso:{
      type:"string"
    },
    Peso:{
      type:"number"
    },
    Altura:{
      type:"number"
    },
  },

};

