/*
  Warnings:

  - The primary key for the `StudyLog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `resource` on the `StudyLog` table. All the data in the column will be lost.
  - The `id` column on the `StudyLog` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `resourceId` to the `StudyLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `StudyLog` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `StudyLog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Listening', 'Reading', 'Watching', 'Speaking', 'Playing');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Current', 'Completed', 'Planned', 'OnHold', 'Dropped');

-- AlterTable
ALTER TABLE "StudyLog" DROP CONSTRAINT "StudyLog_pkey",
DROP COLUMN "resource",
ADD COLUMN     "resourceId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL,
ADD CONSTRAINT "StudyLog_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "status" "Status" NOT NULL,
    "link" TEXT,
    "notes" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "StudyLog" ADD CONSTRAINT "StudyLog_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyLog" ADD CONSTRAINT "StudyLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
