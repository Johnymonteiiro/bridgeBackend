import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryPrimeRepository } from "../../repositories/in-memory/in-memory-prime-repository";
import { CalculateUseCase } from "../../use-cases/calculate";

let primeRepository: InMemoryPrimeRepository;
let sut: CalculateUseCase;

describe("Result Route", () => {
  beforeEach(async () => {
    primeRepository = new InMemoryPrimeRepository();
    sut = new CalculateUseCase(primeRepository);
  });

  it("Should be able to show the result", async () => {
    await sut.execute({
      number: 10,
      prime_list: [1, 2, 3],
      execution_time: "0.5",
    });

    const lists = primeRepository.lists;

    expect(lists.length).toEqual(1);
  });

  it("Should be able to list all prime numbers result", async () => {
    await sut.execute({
      number: 10,
      prime_list: [1, 2, 3],
      execution_time: "0.5",
    });

    const lists = primeRepository.lists;

    expect(lists.length).toBeGreaterThan(0);
  });
});
