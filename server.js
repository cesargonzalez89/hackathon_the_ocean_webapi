const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/profiles', async (req, res) => {
    const allProfiles =  await prisma.profile.findMany({});
    res.json(allProfiles);
  });

  app.get('/profiles/:id', async (req, res) => {
    const id = req.params.id;
    const profile = await prisma.profile.findUnique({where: {id: parseInt(id)}});
    res.json(profile);
  });
  
  app.post('/profiles', async (req, res) => {
    const profile = {
      description: req.body.description,
      amount: req.body.amount
     };
    const message = 'Perfil creado.';
    await prisma.profile.create({data: profile});
    return res.json({message});
  });
  
  app.put('/profiles/:id', async (req, res) => {
      const id = parseInt(req.params.id);
  
      await prisma.profile.update({
          where: {
              id: id
          },
          data: {
            description: req.body.description,
            amount: req.body.amount
          }
      })
  
      return res.json({message: "Actualizado correctamente"});
  });
  
  app.delete('/profiles/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      await prisma.profile.delete({where: {id: id}});
      return res.json({message: "Eliminado correctamente"});
  });
  
app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});