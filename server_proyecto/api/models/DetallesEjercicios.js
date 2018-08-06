/**
 * DetallesEjercicios.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    tipoEjercicio: {
      type:"string"
    },
    nombreEjercicio:{
    type:"string"
    },
    descripcionEjercicio:{
    type:"string"
    },
    rutinaId:{
      type:"number"
    }


  },

};

