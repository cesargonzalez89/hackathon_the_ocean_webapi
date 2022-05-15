const express = require("express");
const profileController = require("./lib/controllers/profileController");
const areaController = require("./lib/controllers/areaController");
const userController = require("./lib/controllers/userController");
const specieController = require("./lib/controllers/specieController");
const eventController = require("./lib/controllers/eventController");
const contributionController = require("./lib/controllers/contributionController");
const SecurityController = require("./lib/controllers/securityController");
const Conn = require("./lib/utils/Conn");
const app = express();
const cors = require('cors');

console.log(Conn.getConnection);

app.use(cors())

app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

///////////////////////////////////////////Profile////////////////////////////////////////////

app.get("/profiles", async (req, res) => {
  const allProfiles = await profileController.getList();
  res.json(allProfiles);
});

app.get("/profiles/:id", async (req, res) => {
  const id = req.params.id;
  const profile = await profileController.getById(id);
  res.json(profile);
});

app.post("/profiles", async (req, res) => {
  const profile = {
    description: req.body.description,
    amount: req.body.amount,
  };
  await profileController.create(profile);
  return res.json({ message: "Perfil creado." });
});

app.put("/profiles/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await profileController.update(id, req.body);
  return res.json({ message: "Actualizado correctamente" });
});

// ///////////////////////////////////////////User////////////////////////////////////////////
app.get("/users", async (req, res) => {
  const allUsers = await userController.getList();
  console.log(allUsers);
  res.json(allUsers);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await userController.getById(id);
  res.json(user);
});

app.post("/users", async (req, res) => {
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

app.put("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await userController.update(id, req.body);
  return res.json({ message: "Actualizado correctamente" });
});

app.delete("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await userController.delete(id);
  return res.json({ message: "Eliminado correctamente" });
});

// ///////////////////////////////////////////Events////////////////////////////////////////////
app.get("/events", async (req, res) => {
  const allEvents = await eventController.getList();
  res.json(allEvents);
});

app.get("/events/:id", async (req, res) => {
  const id = req.params.id;
  const event = await eventController.getById(id);
  res.json(event);
});

app.post("/events", async (req, res) => {
  const event = {
    description: req.body.description,
    capacity: req.body.capacity,
    date: req.body.date,
  };
  await eventController.create(event);
  return res.json({ message: "Evento creado." });
});

app.put("/events/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await eventController.update(id, req.body);
  return res.json({ message: "Actualizado correctamente" });
});

app.delete("/events/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await eventController.delete(id);
  return res.json({ message: "Eliminado correctamente" });
});

// ///////////////////////////////////////////ProtectedAreas////////////////////////////////////////////
app.get("/areas", async (req, res) => {
  const allAreas = await areaController.getList();
  res.json(allAreas);
});

app.get("/areas/:id", async (req, res) => {
  const id = req.params.id;
  const area = await areaController.getById(id);
  res.json(area);
});

app.post("/areas", async (req, res) => {
  const area = {
    description: req.body.description,
    location: req.body.location,
  };
  await areaController.create(area);
  return res.json({ message: "Area protegida creada." });
});

app.put("/areas/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await areaController.update(id, req.body);
  return res.json({ message: "Actualizado correctamente" });
});

app.delete("/areas/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await areaController.delete(id);
  return res.json({ message: "Eliminado correctamente" });
});

// ///////////////////////////////////////////Species////////////////////////////////////////////
app.get("/species", async (req, res) => {
  const allSpecies = await specieController.getList();
  res.json(allSpecies);
});

app.get("/species/:id", async (req, res) => {
  const id = req.params.id;
  const specie = await specieController.getById(id);
  res.json(specie);
});

app.post("/species", async (req, res) => {
  const specie = {
    name: req.body.name,
    specie: req.body.specie,
    qty: req.body.qty,
  };
  await specieController.create(specie);
  return res.json({ message: "Especie creada." });
});

app.put("/species/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await specieController.update(id, req.body);
  return res.json({ message: "Actualizado correctamente" });
});

app.delete("/species/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await specieController.delete(id);
  return res.json({ message: "Eliminado correctamente" });
});

// ///////////////////////////////////////////Contributions////////////////////////////////////////////
app.get("/contributions", async (req, res) => {
  const allontributions = await contributionController.getList();
  res.json(allContributions);
});

app.get("/contributions/:id", async (req, res) => {
  const id = req.params.id;
  const contribution = await contributionController.getById(id);
  res.json(contribution);
});

app.post("/contributions", async (req, res) => {
  const contribution = {
    name: req.body.name,
  };
  await contributionController.create(contribution);
  return res.json({ message: "Contribucion creada." });
});

app.put("/contributions/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await contributionController.update(id, req.body);
  return res.json({ message: "Actualizado correctamente" });
});

app.delete("/contributions/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await contributionController.delete(id);
  return res.json({ message: "Eliminado correctamente" });
});

// ////////////////////////////SingIn////////////////////////////////
app.post("/logIn", async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  const userLogin = await SecurityController.LogIn(user.username);

  if (!userLogin || userLogin.password != user.password)
    return res.json({ encontrado: false });

  return res.json({ encontrado: true, userLogin });
});


app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
