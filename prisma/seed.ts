import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Admin
  const admin = await prisma.user.upsert({
    where: { email: 'arpitha@mallaram.in' },
    update: {},
    create: {
      email: 'arpitha@mallaram.in',
      name: 'Admin Arpitha',
      phone: '9989120933',
      password: 'manamallaram@admin015', // In real app, use hashed password
      role: 'ADMIN',
    },
  });

  // Create some slots for the next 7 days
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 1; i <= 7; i++) {
    const slotDate = new Date(today);
    slotDate.setDate(today.getDate() + i);

    const timeSlots = [
      { start: '10:00 AM', end: '11:00 AM' },
      { start: '11:00 AM', end: '12:00 PM' },
      { start: '02:00 PM', end: '03:00 PM' },
      { start: '03:00 PM', end: '04:00 PM' },
    ];

    for (const time of timeSlots) {
      await prisma.slot.upsert({
        where: {
          date_startTime_endTime: {
            date: slotDate,
            startTime: time.start,
            endTime: time.end,
          },
        },
        update: {},
        create: {
          date: slotDate,
          startTime: time.start,
          endTime: time.end,
          capacity: 15,
        },
      });
    }
  }

  // Create some sample crop prices
  const crops = [
    { name: 'Paddy (Grade A)', price: 2203 },
    { name: 'Maize', price: 2090 },
    { name: 'Cotton', price: 7020 },
    { name: 'Turmeric', price: 6850 },
  ];

  for (const crop of crops) {
    await prisma.cropPrice.create({
      data: {
        cropName: crop.name,
        price: crop.price,
        district: 'Rajanna Sircilla',
        date: new Date(),
      },
    });
  }

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
