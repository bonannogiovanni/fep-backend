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
    required: true,
  },
  luogoNascita: {
    type: String,
    required: true,
  },
  cf: {
    type: String,
    required: true,
  },
  indirizzo: {
    type: String,
    required: true,
  },
  sezione: {
    type: String,
    required: true,
  },
  nomePadre: {
    type: String,
    required: true,
  },
  telefonoPadre: {
    type: String,
    required: true,
  },
  cfPadre: {
    type: String,
    required: true,
  },
  emailPadre: {
    type: String,
    required: true,
  },
  nomeMadre: {
    type: String,
    required: true,
  },
  telefonoMadre: {
    type: String,
    required: true,
  },
  cfMadre: {
    type: String,
    required: true,
  },
  emailMadre: {
    type: String,
    required: true,
  },
  altriRecapiti: {
    type: String,
    required: true,
  },
  allergie: {
    type: String,
    required: true,
  },
  iscrizione: {
    type: Number,
    required: true,
  },
  bolliFatture: {
    type: Number,
    required: true,
  },
  speseVarie: {
    type: Number,
    required: true,
  },
  attivita: {
    type: Number,
    required: true,
  },
  rettaMensile: {
    type: Number,
    required: true,
  },
  prescuola: {
    type: Number,
    required: true,
  },
  altriServizi: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Kids", KidSchema);
