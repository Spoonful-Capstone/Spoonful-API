/*
  Warnings:

  - Added the required column `amount` to the `nutrition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nutrition` ADD COLUMN `amount` DOUBLE NOT NULL;
