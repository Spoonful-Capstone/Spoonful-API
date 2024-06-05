/*
  Warnings:

  - Added the required column `amount` to the `food_nutrition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `food_nutrition` ADD COLUMN `amount` DOUBLE NOT NULL;
