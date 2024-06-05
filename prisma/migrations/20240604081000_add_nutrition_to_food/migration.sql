/*
  Warnings:

  - You are about to drop the `food_nutrition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nutrition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `food_nutrition` DROP FOREIGN KEY `food_nutrition_foodId_fkey`;

-- DropForeignKey
ALTER TABLE `food_nutrition` DROP FOREIGN KEY `food_nutrition_nutritionId_fkey`;

-- AlterTable
ALTER TABLE `food` ADD COLUMN `calories` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `carbohidrate` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `protein` DOUBLE NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `food_nutrition`;

-- DropTable
DROP TABLE `nutrition`;
