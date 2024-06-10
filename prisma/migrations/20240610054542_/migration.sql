/*
  Warnings:

  - You are about to drop the column `foodCategory` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `goal` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `foodCategory`,
    DROP COLUMN `goal`;

-- CreateTable
CREATE TABLE `food_consumption_category` (
    `id` VARCHAR(191) NOT NULL,
    `name` ENUM('Low_Sugar', 'Low_Fat', 'Normal', 'High_Protein') NOT NULL DEFAULT 'Normal',
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `food_consumption_category_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Goal` (
    `id` VARCHAR(191) NOT NULL,
    `name` ENUM('Gain_Weight', 'Lose_Weight', 'Normal') NOT NULL DEFAULT 'Normal',
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Goal_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `food_consumption_category` ADD CONSTRAINT `food_consumption_category_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Goal` ADD CONSTRAINT `Goal_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
