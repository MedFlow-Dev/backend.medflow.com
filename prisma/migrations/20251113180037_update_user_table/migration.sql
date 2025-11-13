-- AlterTable
ALTER TABLE "User" ADD COLUMN     "doctor_speciality" TEXT,
ALTER COLUMN "picture" DROP NOT NULL,
ALTER COLUMN "phone_number" DROP NOT NULL;
