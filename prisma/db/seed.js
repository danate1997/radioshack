const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 3; i++) {
    const user = await prisma.user.create({
      data: {
        email: `email${i}`,
        password: `password${i}`,
      },
    });
    for (let j = 1; j <= 4; j++) {
      const product = await prisma.product.create({
        data: {
          name: `name${j}`,
          price: 100,
          details: `details${j}`,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
