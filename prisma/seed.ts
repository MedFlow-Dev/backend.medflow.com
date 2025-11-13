import { PrismaClient } from '@prisma/client';

// Import your RoleEnum
import { RoleEnum } from '../src/common/enums/role.enum';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create roles from RoleEnum
  const roles = Object.values(RoleEnum);

  for (const roleName of roles) {
    const role = await prisma.role.upsert({
      where: { name: roleName },
      update: {}, // Don't update if exists
      create: { name: roleName }, // Create if doesn't exist
    });
    console.log(`✅ Created/verified role: ${role.name}`);
  }

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
