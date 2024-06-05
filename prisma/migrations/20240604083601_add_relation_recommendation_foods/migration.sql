/*
  Warnings:

  - Added the required column `recommendationId` to the `food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `food` ADD COLUMN `recommendationId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `recommendation` (
    `ID` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `food` ADD CONSTRAINT `food_recommendationId_fkey` FOREIGN KEY (`recommendationId`) REFERENCES `recommendation`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
