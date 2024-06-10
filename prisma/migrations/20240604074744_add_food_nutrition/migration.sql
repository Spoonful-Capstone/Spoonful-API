-- CreateTable
CREATE TABLE `nutrition` (
    `ID` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_foodTonutrition` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_foodTonutrition_AB_unique`(`A`, `B`),
    INDEX `_foodTonutrition_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_foodTonutrition` ADD CONSTRAINT `_foodTonutrition_A_fkey` FOREIGN KEY (`A`) REFERENCES `food`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_foodTonutrition` ADD CONSTRAINT `_foodTonutrition_B_fkey` FOREIGN KEY (`B`) REFERENCES `nutrition`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
