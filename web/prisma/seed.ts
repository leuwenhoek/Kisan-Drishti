import { AsyncLocalStorage } from "async_hooks";
import { PrismaClient, Prisma} from "../src/generated/prisma/client.ts"

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
    name: "JimBob",
    question: "What is that leaf disease?"
    },
    {
        name: "Alice",
        question: "Why is my potato green?"
    }
]

export async function main() {
    for (const u of userData){
        await prisma.user.create({data: u});
    }
    
}

main();