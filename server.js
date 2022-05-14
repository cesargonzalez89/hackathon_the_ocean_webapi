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

///////////////////////////////////////////Profile////////////////////////////////////////////

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
  
  ///////////////////////////////////////////User////////////////////////////////////////////
  app.get('/users', async (req, res) => {
    const allUsers =  await prisma.user.findMany({});
    res.json(allUsers);
  });

  app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await prisma.user.findUnique({where: {id: parseInt(id)}});
    res.json(user);
  });
  
  app.post('/users', async (req, res) => {
    const user = {
        name: req.body.name,
        firtsName: req.body.firtsName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        accessLevel: req.body.accessLevel,
        profileId: req.body.profileId
     };
    const message = 'Usuario creado.';
    await prisma.user.create({data: user});
    return res.json({message});
  });
  
  app.put('/users/:id', async (req, res) => {
      const id = parseInt(req.params.id);
  
      await prisma.user.update({
          where: {
              id: id
          },
          data: {
            name: req.body.name,
            firtsName: req.body.firtsName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
            accessLevel: req.body.accessLevel,
            profileId: req.body.profileId
          }
      })
  
      return res.json({message: "Actualizado correctamente"});
  });

  app.delete('/users/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      await prisma.user.delete({where: {id: id}});
      return res.json({message: "Eliminado correctamente"});
  });

  ///////////////////////////////////////////Events////////////////////////////////////////////
  app.get('/events', async (req, res) => {
    const allEvents =  await prisma.events.findMany({});
    res.json(allEvents);
  });

  app.get('/events/:id', async (req, res) => {
    const id = req.params.id;
    const event = await prisma.events.findUnique({where: {id: parseInt(id)}});
    res.json(event);
  });
  
  app.post('/events', async (req, res) => {
    const event = {
        description: req.body.description,
        capacity: req.body.capacity,
        date: req.body.date
     };
    const message = 'Evento creado.';
    await prisma.events.create({data: event});
    return res.json({message});
  });
  
  app.put('/events/:id', async (req, res) => {
      const id = parseInt(req.params.id);
  
      await prisma.events.update({
          where: {
              id: id
          },
          data: {
            description: req.body.description,
            capacity: req.body.capacity,
            date: req.body.date
          }
      })
  
      return res.json({message: "Actualizado correctamente"});
  });

  app.delete('/events/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      await prisma.events.delete({where: {id: id}});
      return res.json({message: "Eliminado correctamente"});
  });

  ///////////////////////////////////////////ProtectedAreas////////////////////////////////////////////
  app.get('/areas', async (req, res) => {
    const allAreas =  await prisma.protectedAreas.findMany({});
    res.json(allAreas);
  });

  app.get('/areas/:id', async (req, res) => {
    const id = req.params.id;
    const area = await prisma.protectedAreas.findUnique({where: {id: parseInt(id)}});
    res.json(area);
  });
  
  app.post('/areas', async (req, res) => {
    const area = {
        description: req.body.description,
        location: req.body.location
     };
    const message = 'Area protegida creada.';
    await prisma.protectedAreas.create({data: area});
    return res.json({message});
  });
  
  app.put('/areas/:id', async (req, res) => {
      const id = parseInt(req.params.id);
  
      await prisma.protectedAreas.update({
          where: {
              id: id
          },
          data: {
            description: req.body.description,
            location: req.body.location
          }
      })
  
      return res.json({message: "Actualizado correctamente"});
  });

  app.delete('/areas/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      await prisma.protectedAreas.delete({where: {id: id}});
      return res.json({message: "Eliminado correctamente"});
  });

  ///////////////////////////////////////////Species////////////////////////////////////////////
  app.get('/species', async (req, res) => {
    const allSpecies =  await prisma.species.findMany({});
    res.json(allSpecies);
  });

  app.get('/species/:id', async (req, res) => {
    const id = req.params.id;
    const specie = await prisma.species.findUnique({where: {id: parseInt(id)}});
    res.json(specie);
  });
  
  app.post('/species', async (req, res) => {
    const specie = {
        name: req.body.name,
        specie: req.body.specie,
        qty: req.body.qty
     };
    const message = 'Especie creada.';
    await prisma.species.create({data: specie});
    return res.json({message});
  });
  
  app.put('/species/:id', async (req, res) => {
      const id = parseInt(req.params.id);
  
      await prisma.species.update({
          where: {
              id: id
          },
          data: {
            name: req.body.name,
            specie: req.body.specie,
            qty: req.body.qty
          }
      })
  
      return res.json({message: "Actualizado correctamente"});
  });

  app.delete('/species/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      await prisma.species.delete({where: {id: id}});
      return res.json({message: "Eliminado correctamente"});
  });

    ///////////////////////////////////////////Contributions////////////////////////////////////////////
    app.get('/contributions', async (req, res) => {
        const allontributions =  await prisma.contributions.findMany({});
        res.json(allContributions);
      });
    
      app.get('/contributions/:id', async (req, res) => {
        const id = req.params.id;
        const contribution = await prisma.contributions.findUnique({where: {id: parseInt(id)}});
        res.json(contribution);
      });
      
      app.post('/contributions', async (req, res) => {
        const contribution = {
            name: req.body.name
         };
        const message = 'Contribucion creada.';
        await prisma.contributions.create({data: contribution});
        return res.json({message});
      });
      
      app.put('/contributions/:id', async (req, res) => {
          const id = parseInt(req.params.id);
      
          await prisma.contributions.update({
              where: {
                  id: id
              },
              data: {
                name: req.body.name
              }
          })
      
          return res.json({message: "Actualizado correctamente"});
      });
    
      app.delete('/contributions/:id', async (req, res) => {
          const id = parseInt(req.params.id);
          await prisma.contributions.delete({where: {id: id}});
          return res.json({message: "Eliminado correctamente"});
      });
  
app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});