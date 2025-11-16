import { GenderEnum, RoleEnum } from '@prisma/client';
import { faker } from '@faker-js/faker';

export function fakeUser(roleId: number) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    picture: undefined,
    firstname: firstName,
    lastname: lastName,
    email: faker.internet.email({ firstName, lastName }),
    password: faker.internet.password({ length: 12 }),
    access_token: faker.string.alphanumeric(32),
    phone_number: undefined,
    doctor_speciality: undefined,
    role_id: roleId,
  };
}

export function fakeUserComplete(roleId: number) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.number.int({ max: 2147483647 }),
    picture: undefined,
    firstname: firstName,
    lastname: lastName,
    email: faker.internet.email({ firstName, lastName }),
    gender: faker.helpers.arrayElement([GenderEnum.MALE, GenderEnum.FEMALE]),
    password: faker.internet.password({ length: 12 }),
    access_token: faker.string.alphanumeric(32),
    phone_number: undefined,
    doctor_speciality: undefined,
    role_id: roleId,
    clinic_id: undefined,
    created_at: new Date(),
    updated_at: new Date(),
  };
}

export function fakeService() {
  return {
    name: faker.helpers.arrayElement([
      'General Consultation',
      'Blood Test',
      'X-Ray Imaging',
      'Ultrasound',
      'Physical Therapy',
      'Dental Checkup',
      'Eye Examination',
      'Vaccination',
      'ECG Test',
      'MRI Scan',
    ]),
    description: faker.lorem.sentence(),
    cost: faker.number.int({ min: 20, max: 500 }),
  };
}

export function fakeServiceComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    name: faker.helpers.arrayElement([
      'General Consultation',
      'Blood Test',
      'X-Ray Imaging',
      'Ultrasound',
      'Physical Therapy',
      'Dental Checkup',
      'Eye Examination',
      'Vaccination',
      'ECG Test',
      'MRI Scan',
    ]),
    description: faker.lorem.sentence(),
    cost: faker.number.int({ min: 20, max: 500 }),
    created_at: new Date(),
    updated_at: new Date(),
  };
}

export function fakeRoleComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    name: RoleEnum.PATIENT,
    created_at: new Date(),
    updated_at: new Date(),
  };
}

export function fakePerscription() {
  return {
    title: faker.helpers.arrayElement([
      'Antibiotic Treatment',
      'Pain Management',
      'Blood Pressure Medication',
      'Diabetes Management',
      'Vitamin Supplements',
      'Allergy Medication',
    ]),
    description: faker.lorem.sentences(2),
  };
}

export function fakePerscriptionComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    title: faker.helpers.arrayElement([
      'Antibiotic Treatment',
      'Pain Management',
      'Blood Pressure Medication',
      'Diabetes Management',
      'Vitamin Supplements',
      'Allergy Medication',
    ]),
    description: faker.lorem.sentences(2),
    appointement_id: faker.number.int({ max: 2147483647 }),
    created_at: new Date(),
    updated_at: new Date(),
  };
}

export function fakeInvoice() {
  return {
    price: faker.number.int({ min: 50, max: 1000 }),
    text: faker.lorem.sentence(),
  };
}

export function fakeInvoiceComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    price: faker.number.int({ min: 50, max: 1000 }),
    discount: faker.number.int({ min: 0, max: 20 }),
    text: faker.lorem.sentence(),
    appointement_id: faker.number.int({ max: 2147483647 }),
    created_at: new Date(),
    updated_at: new Date(),
  };
}

export function fakeClinicServicesComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    clinic_id: faker.number.int({ max: 2147483647 }),
    service_id: faker.number.int({ max: 2147483647 }),
    created_at: new Date(),
    updated_at: new Date(),
  };
}

export function fakeClinic() {
  return {
    name: `${faker.company.name()} Medical Center`,
    rooms_number: faker.number.int({ min: 5, max: 50 }),
    receptionist_id: undefined,
  };
}

export function fakeClinicComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    name: `${faker.company.name()} Medical Center`,
    rooms_number: faker.number.int({ min: 5, max: 50 }),
    receptionist_id: undefined,
    created_at: new Date(),
    updated_at: new Date(),
  };
}

export function fakeAppointement() {
  return {
    date: faker.date.soon({ days: 30 }),
    subject: faker.helpers.arrayElement([
      'Annual Checkup',
      'Follow-up Visit',
      'Consultation',
      'Test Results Review',
      'Vaccination Appointment',
      'Therapy Session',
      'Dental Cleaning',
      'Eye Examination',
    ]),
    description: faker.lorem.sentence(),
  };
}

export function fakeAppointementComplete() {
  return {
    id: faker.number.int({ max: 2147483647 }),
    date: faker.date.soon({ days: 30 }),
    subject: faker.helpers.arrayElement([
      'Annual Checkup',
      'Follow-up Visit',
      'Consultation',
      'Test Results Review',
      'Vaccination Appointment',
      'Therapy Session',
      'Dental Cleaning',
      'Eye Examination',
    ]),
    description: faker.lorem.sentence(),
    is_canceled: faker.datatype.boolean({ probability: 0.1 }),
    doctor_id: faker.number.int({ max: 2147483647 }),
    patient_id: faker.number.int({ max: 2147483647 }),
    clinic_id: faker.number.int({ max: 2147483647 }),
    created_at: new Date(),
    updated_at: new Date(),
  };
}
