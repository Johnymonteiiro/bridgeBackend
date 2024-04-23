-- CreateTable
CREATE TABLE "prime" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "execution_time" TEXT NOT NULL,
    "prime_list" INTEGER[],

    CONSTRAINT "prime_pkey" PRIMARY KEY ("id")
);
