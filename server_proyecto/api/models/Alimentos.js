/**
 * Alimentos.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    tipoAlimento:{
      type:"string"
    },
    nombreAlimento:{
      type:"string"
    },
    cantCalorias:{
      type:"number"
    },
    cantProteinas:{
      type:"number"
    },
    DietaId:{
      type:"number"
    },

  },

};

