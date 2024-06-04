-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "Hashedpassword" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "walletAddress" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'SOL',

    CONSTRAINT "walletAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
