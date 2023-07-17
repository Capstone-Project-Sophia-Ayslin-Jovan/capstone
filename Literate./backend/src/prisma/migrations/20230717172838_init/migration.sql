/*
  Warnings:

  - You are about to drop the column `bankSum` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hourlyWage` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastLoggedIn` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `currentAmount` on the `subCategory` table. All the data in the column will be lost.
  - You are about to drop the column `totalAmount` on the `subCategory` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `subCategory` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allocation` to the `subCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `budgetId` to the `subCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalSpent` to the `subCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `subCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "subCategory" DROP CONSTRAINT "subCategory_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bankSum",
DROP COLUMN "hourlyWage",
DROP COLUMN "lastLoggedIn",
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "subCategory" DROP COLUMN "currentAmount",
DROP COLUMN "totalAmount",
DROP COLUMN "userId",
ADD COLUMN     "allocation" INTEGER NOT NULL,
ADD COLUMN     "billDate" TIMESTAMP(3),
ADD COLUMN     "budgetId" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "totalSpent" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "budgetTotal" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Budget_userId_key" ON "Budget"("userId");

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subCategory" ADD CONSTRAINT "subCategory_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
