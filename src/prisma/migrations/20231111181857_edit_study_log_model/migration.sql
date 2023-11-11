-- CreateTable
CREATE TABLE "StudyLog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudyLog_pkey" PRIMARY KEY ("id")
);
