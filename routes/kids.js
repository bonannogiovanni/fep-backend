const express = require("express");

const router = express.Router();
const Kid = require("../models/Kid");

router.get("/", async (req, res) => {
  try {
    const kids = await Kid.find();
    res.json(kids);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const { nome, cognome, dataNascita, sezione, allergie } = req.body;

  const kid = new Kid({
    nome,
    cognome,
    dataNascita,
    sezione,
    allergie,
  });

  try {
    const savedKid = await kid.save();
    res.json(savedKid);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

router.get("/:kidId", async (req, res) => {
  const { kidId } = req.params;

  try {
    const kid = await Kid.findById(kidId);
    res.json(kid);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

router.delete("/:kidId", async (req, res) => {
  const { kidId } = req.params;

  try {
    const removedKid = await Kid.remove({ _id: kidId });
    res.json(removedKid);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

router.put("/:kidId", async (req, res) => {
  
  const filter = req.params.kidId;
  const updatedKid = req.body;

  try {
    const modifiedKid = await Kid.findOneAndUpdate(filter, updatedKid, {
      new: true
    });
    res.json(modifiedKid);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
