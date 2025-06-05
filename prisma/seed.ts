import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        email: "beepboop@gmail.com",
        password: "BEEPboop6989$",
    },
    {
        email: "boopbeep@gmail.com",
        password: "BOOPbeep6989$",
    },
];

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u});
    }
}

main();