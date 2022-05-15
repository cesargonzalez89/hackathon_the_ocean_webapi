const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserService {
    static async getList() {
        return await prisma.user.findMany({});
    }

    static async getById(id) {
        return await prisma.user.findUnique({where: {id: parseInt(id)}});
    }

    static async create(user) {
        await prisma.user.create({data: user});
    }
    
    static async put(user) {
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
              name: user.name,
              firtsName: user.firtsName,
              lastName: user.lastName,
              username: user.username,
              password: user.password,
              accessLevel: user.accessLevel,
              profileId: user.profileId
            }
        })
    }

    static async delete(id) {
        await prisma.user.delete({where: {id: id}});
    }
}

module.exports = UserService;