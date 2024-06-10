/*
  Warnings:

  - You are about to drop the column `token` on the `refresh_session` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `refresh_session` DROP COLUMN `token`;
