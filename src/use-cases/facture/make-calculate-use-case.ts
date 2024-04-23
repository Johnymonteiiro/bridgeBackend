import { PrismaPrimeRepository } from "../../repositories/prisma/prisma-prime-repository";
import { CalculateUseCase } from "../calculate";


export function MakeCalculateUseCase () {
    const prismaPrimeRepository = new PrismaPrimeRepository();
    const prismaUseCase = new CalculateUseCase(prismaPrimeRepository);

    return prismaUseCase;
}