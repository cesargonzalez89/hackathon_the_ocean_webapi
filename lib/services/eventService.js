const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EventService {
    static getList() {
        return prisma.events.findMany({});
    } 

    static getById(id) {
        return  prisma.events.findUnique({where: {id: parseInt(id)}});
    }

    static create(event){
        return prisma.events.create({data: event}); 
    }

    static  update(id, event) {
        return prisma.events.update({
            where: {
                id: id
            },
            data: {
              description: event.description,
              capacity: event.capacity,
              date: event.date
            }
        })
    }

    static delete(id) {
        return  prisma.events.delete({where: {id: id}});
    }
}

module.exports = EventService;