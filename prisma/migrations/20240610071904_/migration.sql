/*
  Warnings:

  - Added the required column `foodCategoryId` to the `food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `food` ADD COLUMN `foodCategoryId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `food_category` (
    `ID` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `food` ADD CONSTRAINT `food_foodCategoryId_fkey` FOREIGN KEY (`foodCategoryId`) REFERENCES `food_category`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
