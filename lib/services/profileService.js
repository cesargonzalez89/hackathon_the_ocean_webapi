const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ProfileService {
    static async getList() {
        return await prisma.events.findMany({});
    }

    static async getById(id) {
        return await prisma.events.findUnique({where: {id: parseInt(id)}});
    }

    static async create(event) {
        await prisma.events.create({data: event});
    }

    static async update(id, event) {
        await prisma.events.update({
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

    static async delete(id) {
        await prisma.events.delete({where: {id: id}});
    }
}

module.exports = ProfileService;