/*
  Warnings:

  - You are about to alter the column `name` on the `food_consumption_category` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `name` on the `goal` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `food_consumption_category` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `goal` MODIFY `name` VARCHAR(191) NOT NULL;
