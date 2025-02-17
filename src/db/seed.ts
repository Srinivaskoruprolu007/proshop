import {PrismaClient} from '@prisma/client'
import sampleData from './sample-data'

async function main() {
    const prisma = new PrismaClient()
    await prisma.product.deleteMany()
    // added in auth branch
    await prisma.account.deleteMany()
    await prisma.session.deleteMany()
    await prisma.verificationToken.deleteMany()
    await prisma.user.deleteMany()
    await prisma.product.createMany({data: sampleData.products})
    await prisma.user.createMany({data: sampleData.users})
    console.log('Seeded successfully');
}

main()