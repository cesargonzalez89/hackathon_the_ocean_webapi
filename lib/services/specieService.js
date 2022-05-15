const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class SpecieService {
    static getList() {
        return prisma.species.findMany({});
    }

    static getById(id) {
        return prisma.species.findUnique({where: {id: parseInt(id)}});
    }

    static async create () {
       return prisma.species.create({data: specie});
    }

    static async update(id, specie) {
        return prisma.species.update({
            where: {
                id: id
            },
            data: {
              name: specie.name,
              specie: specie.specie,
              qty: specie.qty
            }
        })
    }

    static delete(id) {
        return prisma.species.delete({where: {id: id}});
    }
}

module.exports = SpecieService;