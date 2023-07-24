/*
  Warnings:

  - You are about to drop the column `budgetTotal` on the `Budget` table. All the data in the column will be lost.
  - Added the required column `name` to the `Budget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Budget` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_userId_fkey";

-- DropForeignKey
ALTER TABLE "subCategory" DROP CONSTRAINT "subCategory_budgetId_fkey";

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "budgetTotal",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "total" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "currBudgetId" TEXT;

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subCategory" ADD CONSTRAINT "subCategory_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE CASCADE ON UPDATE CASCADE;
