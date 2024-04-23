import { Prisma } from '@prisma/client'
import { PrimeInterface } from '../prime-interface'
import { prisma } from '../../lib/prisma'

export class PrismaPrimeRepository implements PrimeInterface {
  async create(data: Prisma.PrimesCreateInput) {
    const primes = await prisma.primes.create({
      data,
    })
    
    return primes
  }
}
