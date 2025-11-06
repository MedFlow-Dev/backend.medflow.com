/*
  Warnings:

  - You are about to drop the `Facture` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Facture" DROP CONSTRAINT "Facture_appointement_id_fkey";

-- DropTable
DROP TABLE "public"."Facture";

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "text" TEXT NOT NULL,
    "appointement_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_appointement_id_key" ON "Invoice"("appointement_id");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_appointement_id_fkey" FOREIGN KEY ("appointement_id") REFERENCES "Appointement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
