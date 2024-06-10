/*
  Warnings:

  - Added the required column `eatEachDay` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `eatEachDay` INTEGER NOT NULL,
    ADD COLUMN `foodCategory` ENUM('APPETIZERS', 'MAIN_COURSE', 'DESSERTS') NOT NULL DEFAULT 'MAIN_COURSE',
    ADD COLUMN `goal` ENUM('WEIGHT_GAIN', 'WEIGHT_LOSE', 'NORMAL') NOT NULL DEFAULT 'NORMAL';
