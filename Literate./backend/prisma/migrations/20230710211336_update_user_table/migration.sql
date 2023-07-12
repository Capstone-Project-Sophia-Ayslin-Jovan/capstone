/*
  Warnings:

  - You are about to drop the column `hourly_wage` on the `User` table. All the data in the column will be lost.
  - Added the required column `bankSum` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hourlyWage` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hourly_wage",
ADD COLUMN     "bankSum" INTEGER NOT NULL,
ADD COLUMN     "hourlyWage" INTEGER NOT NULL;
