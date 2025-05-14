-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "UpdatedAt" TIMESTAMP(3),
ADD COLUMN     "content" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "coverImageUrl" TEXT NOT NULL DEFAULT 'https://example.com/default.jpg',
ADD COLUMN     "tags" TEXT[];
