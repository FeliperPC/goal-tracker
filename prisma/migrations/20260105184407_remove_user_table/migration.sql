/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `userId` on table `Goal` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_userId_fkey";

-- AlterTable
ALTER TABLE "Goal" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "User";
