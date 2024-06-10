/*
  Warnings:

  - Added the required column `token` to the `Refresh_Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `refresh_session` ADD COLUMN `token` VARCHAR(191) NOT NULL;
