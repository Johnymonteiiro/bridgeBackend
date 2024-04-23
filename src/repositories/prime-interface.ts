import { Prisma, Primes } from '@prisma/client'

export interface PrimeInterface {
  create(data: Prisma.PrimesCreateInput): Promise<Primes>
}
