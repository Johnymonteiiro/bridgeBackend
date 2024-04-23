import { Primes } from "@prisma/client";
import { PrimeInterface } from "../repositories/prime-interface";
import { onlyPositiveNumber } from "./error/check_number_error";
import { randomUUID } from "crypto";

interface CalculateUseCaseRequest {
  number: number;
  execution_time: string;
  prime_list: number[];
}

interface CalculateUseCaseResponse {
  data: Primes;
}

export class CalculateUseCase {
  constructor(private primeRepository: PrimeInterface) {}

  async execute({
    number,
    execution_time,
    prime_list,
  }: CalculateUseCaseRequest): Promise<CalculateUseCaseResponse> {
    if (number < 0) {
      throw new onlyPositiveNumber();
    }

    const data = {
      id: randomUUID(),
      number,
      prime_list,
      execution_time,
    };

    await this.primeRepository.create(data);

    return { data };
  }
}
