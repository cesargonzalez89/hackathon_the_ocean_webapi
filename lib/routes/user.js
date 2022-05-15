const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");

// create user
router.get("/users", async (req, res) => {
  const allUsers = await userController.getList();
  res.json(allUsers);
});

router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await userController.getById(id);
  res.json(user);
});

router.post("/users", async (req, res) => {
  const user = {
    name: req.body.name,
    firtsName: req.body.firtsName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    accessLevel: req.body.accessLevel,
    profileId: req.body.profileId,
  };
  await userController.create(user);
  return res.json({ message: "Usuario creado." });
});

router.put("/users/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await userController.update(id, req.body);
    return res.json({ message: "Actualizado correctamente" });
  });

 router.delete("/users/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await userController.delete(id);
    return res.json({ message: "Eliminado correctamente" });
  });

  module.exports = router;