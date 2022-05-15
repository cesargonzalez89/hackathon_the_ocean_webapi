const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class SecurityService {
    static LogIn(username) {
        return prisma.user.findFirst({
            where: { username: username },
            select: {
              username: true,
              password: true,
              accessLevel: true,
            },
          });
    }
}

module.exports = SecurityService;