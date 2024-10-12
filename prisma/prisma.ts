import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
   
    const post = await prisma.post.create({
        data: {
        title: 'test post',
        content: 'lorem baptiste à écrit un remier post',
        authorId: 1
        },
    })
    console.log(post)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })