import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listOfInvoices: {vendor_name, amount, due_date, description, paid, user}[] = [
    { vendor_name: 'Vendor 1', amount: 10, due_date: new Date('2025-02-25'), description: 'Description 1', paid: true, user: null},
    { vendor_name: 'Vendor 2', amount: 20, due_date: new Date('2025-03-12'), description: 'Description 2', paid: true, user: null },
    { vendor_name: 'Vendor 3', amount: 30, due_date: new Date('2025-02-12'), description: 'Description 3', paid: true, user: null },
    { vendor_name: 'Vendor 4', amount: 40, due_date: new Date('2025-04-21'), description: 'Description 4', paid: true, user: null },
    { vendor_name: 'Vendor 5', amount: 50, due_date: new Date('2025-03-29'), description: 'Description 5', paid: true, user: null },
    { vendor_name: 'Vendor 6', amount: 50, due_date: new Date('2025-06-20'), description: 'Description 6', paid: true, user: null },
    { vendor_name: 'Vendor 7', amount: 50, due_date: new Date('2025-02-25'), description: 'Description 7', paid: true, user: null },
    { vendor_name: 'Vendor 8', amount: 50, due_date: new Date('2025-02-25'), description: 'Description 8', paid: true, user: null },
    { vendor_name: 'Vendor 9', amount: 50, due_date: new Date('2025-06-10'), description: 'Description 9', paid: true, user: null },
    { vendor_name: 'Vendor 10', amount: 50, due_date: new Date('2025-02-23'), description: 'Description 10', paid: true, user: null },
]

const main = async () => {
  try{
    //clean the database
    await prisma.invoice.deleteMany();
    await prisma.user.deleteMany();

    await prisma.$queryRaw`ALTER SEQUENCE public."User_id_seq" RESTART WITH 1;`
    await prisma.$queryRaw`ALTER SEQUENCE public."Invoice_id_seq" RESTART WITH 1;`

    const user = await prisma.user.create({
      data: {
        email: 'oneaalinx@gmail.com',
        password: 'unbreakable-pass',
        name: 'Alin Onea',
      },
    });

    for (const invoice of listOfInvoices) {
      invoice.user = { connect: {id: user.id}}
      await prisma.invoice.create({
        data: invoice,
      });
    }
    console.log(`Database has been seeded. 🌱`);
  }
  catch(error){
    throw error;
  }
}

main().catch((err) => {
  console.warn("Error While generating Seed: \n", err);
});