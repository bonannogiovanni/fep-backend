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
  dataDiNascita: {
    type: Date,
    required: true,
  },
  sezione: String,
  iscrizione: String,
  allergie: String,
});

module.exports = mongoose.model("Kids", KidSchema);
