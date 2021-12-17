import { PrismaClient } from '@prisma/client'
import * as fake from 'faker'

const prisma = new PrismaClient()

async function main() {
  //by default lets do 10 seeded users
  for (let i = 0; i < 10; i++) {
    const email = fake.internet.email()
    const firstname = fake.name.firstName()
    console.log(email)
    console.log(firstname)
    let user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email: email,
        name: firstname,
      },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
