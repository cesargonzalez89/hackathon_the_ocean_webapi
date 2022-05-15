const express = require("express");
const router = express.Router();
const areaController = require("./../controllers/areaController");

router.get("/areas", async (req, res) => {
  const allAreas = await areaController.getList();
  res.json(allAreas);
});

router.get("/areas/:id", async (req, res) => {
  const id = req.params.id;
  const area = await areaController.getById(id);
  res.json(area);
});

router.post("/areas", async (req, res) => {
  const area = {
    description: req.body.description,
    location: req.body.location,
  };
  await areaController.create(area);
  return res.json({ message: "Area protegida creada." });
});

router.put("/areas/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await areaController.update(id, req.body);
  return res.json({ message: "Actualizado correctamente" });
});

router.delete("/areas/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await areaController.delete(id);
  return res.json({ message: "Eliminado correctamente" });
});

module.exports = router;
