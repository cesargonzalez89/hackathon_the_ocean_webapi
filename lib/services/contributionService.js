const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ContributionService {
    static async getList() {
        return await prisma.contributions.findMany({});
    }

    static async getById(id) {
        return await prisma.contributions.findUnique({where: {id: parseInt(id)}});
    }

    static async create(contribution) {
        await prisma.contributions.create({data: contribution});
    }

    static async update(id, contribution) {
        await prisma.contributions.update({
            where: {
                id: id
            },
            data: {
              name: contribution.name
            }
        })
    }

    static async delete(id) {
        await prisma.contributions.delete({where: {id: id}});
    }
}

module.exports = ContributionService;