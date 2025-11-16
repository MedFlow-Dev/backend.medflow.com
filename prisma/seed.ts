import { PrismaClient } from '@prisma/client';
import { RoleEnum } from '../src/common/enums/role.enum';
import * as bcrypt from 'bcrypt';
import * as fake from './generated';

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
    console.log(`Created/verified role: ${role.name}`);
  }

  // 2. Create admin user
  console.log('Creating admin user...');

  // Make sure the ADMIN role exists
  const adminRole = await prisma.role.findFirst({
    where: { name: RoleEnum.ADMIN },
  });

  if (!adminRole) {
    throw new Error('ADMIN role not found. Make sure RoleEnum contains ADMIN.');
  }

  // Check if admin already exists
  const existingAdmin = await prisma.user.findFirst({
    where: { email: 'admin@admin.com' },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin', 10);

    await prisma.user.create({
      data: {
        firstname: 'admin',
        lastname: 'admin',
        email: 'admin@admin.com',
        gender: 'MALE', // or 'FEMALE' depending on your GenderEnum
        role_id: adminRole.id, // or role: { connect: { id: adminRole.id } }
        password: hashedPassword,
        access_token: '',
      },
    });

    console.log('Admin user created: admin@admin.com / admin');
  } else {
    console.log('Admin user already exists. Skipping creation.');
  }

  // 3. Create fake users
  console.log('Creating fake doctors...');
  for (const _ of Array(10)) {
    const roleId = await prisma.role
      .findFirst({ where: { name: RoleEnum.DOCTOR } })
      .then((role) => role?.id);
    const userData = fake.fakeUser(roleId!);
    await prisma.user.create({ data: userData });
  }
  console.log('Finished creating fake doctors.');
  console.log('Creating fake receptionists...');
  for (const _ of Array(10)) {
    const roleId = await prisma.role
      .findFirst({ where: { name: RoleEnum.RECEPTIONIST } })
      .then((role) => role?.id);
    const userData = fake.fakeUser(roleId!);
    await prisma.user.create({ data: userData });
  }
  console.log('Finished creating fake receptionists.');
  console.log('Creating fake patients...');
  for (const _ of Array(10)) {
    const roleId = await prisma.role
      .findFirst({ where: { name: RoleEnum.PATIENT } })
      .then((role) => role?.id);
    const userData = fake.fakeUser(roleId!);
    await prisma.user.create({ data: userData });
  }
  console.log('Finished creating fake patients.');

  // 4. Create fake clinics
  console.log('Creating fake clinics...');
  for (const _ of Array(10)) {
    const clinicData = fake.fakeClinic();
    await prisma.clinic.create({ data: clinicData });
  }
  console.log('Finished creating fake clinics.');

  // 5. Create fake services
  console.log('Creating fake services...');
  for (const _ of Array(50)) {
    const serviceData = fake.fakeService();
    await prisma.service.create({ data: serviceData });
  }
  console.log('Finished creating fake services');

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
