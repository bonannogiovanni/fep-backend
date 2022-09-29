const mongoose = require("mongoose");

const KidSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cognome: {
    type: String,
    required: true,
  },
  dataNascita: {
    type: Date,
    required: false,
  },
  luogoNascita: {
    type: String,
    required: false,
  },
  cf: {
    type: String,
    required: false,
  },
  indirizzo: {
    type: String,
    required: false,
  },
  sezione: {
    type: String,
    required: false,
  },
  nomePadre: {
    type: String,
    required: false,
  },
  telefonoPadre: {
    type: String,
    required: false,
  },
  cfPadre: {
    type: String,
    required: false,
  },
  emailPadre: {
    type: String,
    required: false,
  },
  nomeMadre: {
    type: String,
    required: false,
  },
  telefonoMadre: {
    type: String,
    required: false,
  },
  cfMadre: {
    type: String,
    required: false,
  },
  emailMadre: {
    type: String,
    required: false,
  },
  altriRecapiti: {
    type: String,
    required: false,
  },
  allergie: {
    type: String,
    required: false,
  },
  iscrizione: {
    type: Number,
    required: false,
    default: 0,
  },
  bolliFatture: {
    type: Number,
    required: false,
    default: 0,
  },
  speseVarie: {
    type: Number,
    required: false,
    default: 0,
  },
  attivita: {
    type: Number,
    required: false,
    default: 0,
  },
  rettaMensile: {
    type: Number,
    required: false,
    default: 0,
  },
  prescuola: {
    type: Number,
    required: false,
    default: 0,
  },
  altriServizi: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model("Kids", KidSchema);
