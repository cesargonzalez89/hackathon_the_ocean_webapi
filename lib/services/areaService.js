const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class AreaService {
    static  getList() {
        return prisma.protectedAreas.findMany({});
    }

    static  getById(id) {
        return  prisma.protectedAreas.findUnique({where: {id: parseInt(id)}});
    }

    static create(area) {
        return prisma.protectedAreas.create({data: area});
    }

    static update (id, area) {
        return prisma.protectedAreas.update({
            where: {
                id: id
            },
            data: {
              description: area.description,
              location: area.location
            }
        })
    }

    static  delete(id) {
        return prisma.protectedAreas.delete({where: {id: id}});
    }
}

module.exports = AreaService;