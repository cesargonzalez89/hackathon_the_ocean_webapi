// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

describe("Test para server", () => {

    test("Test 1: Calcular todos los perfiles en la base de datos", async () => {
        const allExplorers =  await prisma.profile.findMany({});
        expect(allExplorers.length).toBe(1);
    });

});