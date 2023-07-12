/*
  Warnings:

  - Added the required column `hourly_wage` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hourly_wage" INTEGER NOT NULL;
