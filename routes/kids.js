const express = require("express");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();
const Kid = require("../models/Kid");

router.get("/", authenticateToken, async (req, res) => {
  try {
    const kids = await Kid.find();
    res.json(kids);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

router.post("/", authenticateToken, async (req, res) => {
  const { _id, ...newKid } = req.body;
 
  const kid = new Kid(newKid);

  try {
    const savedKid = await kid.save();
    res.json(savedKid);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

router.get("/:kidId", authenticateToken, async (req, res) => {
  const { kidId } = req.params;

  try {
    const kid = await Kid.findById(kidId);
    res.json(kid);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

router.delete("/:kidId", authenticateToken, async (req, res) => {
  const { kidId } = req.params;

  try {
    const removedKid = await Kid.remove({ _id: kidId });
    res.json(removedKid);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

router.put("/:kidId", authenticateToken, async (req, res) => {
  const filter = { _id: req.params.kidId };

  const { _id, ...updatedKid } = req.body;

  try {
    const modifiedKid = await Kid.findOneAndUpdate(filter, updatedKid, {
      new: true,
    });

    res.json(modifiedKid);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
