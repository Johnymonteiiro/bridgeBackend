import { Primes  } from "@prisma/client";
import { PrimeInterface } from "../prime-interface";

export class InMemoryPrimeRepository implements PrimeInterface {
   
  public lists: Primes[] = [];
  async create(data: Primes) {
    const primes = {
      id: "1234",
      number: data.number,
      prime_list: data.prime_list,
      execution_time: data.execution_time,
    };
    
    this.lists.push(primes)

    return primes
  }
}
