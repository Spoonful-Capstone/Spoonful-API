/*
  Warnings:

  - You are about to drop the column `amount` on the `nutrition` table. All the data in the column will be lost.
  - You are about to drop the `_foodtonutrition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_foodtonutrition` DROP FOREIGN KEY `_foodTonutrition_A_fkey`;

-- DropForeignKey
ALTER TABLE `_foodtonutrition` DROP FOREIGN KEY `_foodTonutrition_B_fkey`;

-- AlterTable
ALTER TABLE `nutrition` DROP COLUMN `amount`;

-- DropTable
DROP TABLE `_foodtonutrition`;

-- CreateTable
CREATE TABLE `food_nutrition` (
    `foodId` VARCHAR(191) NOT NULL,
    `nutritionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`foodId`, `nutritionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `food_nutrition` ADD CONSTRAINT `food_nutrition_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `food`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `food_nutrition` ADD CONSTRAINT `food_nutrition_nutritionId_fkey` FOREIGN KEY (`nutritionId`) REFERENCES `nutrition`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
