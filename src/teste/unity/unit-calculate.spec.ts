import {  describe, beforeEach, expect, it } from "vitest";
import { CalculateUseCase } from "../../use-cases/calculate";
import { InMemoryPrimeRepository } from "../../repositories/in-memory/in-memory-prime-repository";
import { onlyPositiveNumber } from "../../use-cases/error/check_number_error";

let primeRepository: InMemoryPrimeRepository;
let sut: CalculateUseCase;

describe("Calculate Route", () => {
  beforeEach(async () => {
    primeRepository = new InMemoryPrimeRepository();
    sut = new CalculateUseCase(primeRepository);
  });

  it("Should be able to send a prime number to be calculated", async () => {
    const { data } = await sut.execute({
      number: 10,
      prime_list: [1, 2, 3],
      execution_time: "0.5",
    });

    expect(data.id).toEqual(expect.any(String));
  });

  it("Should not be able to send a negative prime number", async () => {
    expect(
      async () =>
        await sut.execute({
          number: -10,
          prime_list: [1, 2, 3],
          execution_time: "0.5",
        })
    ).rejects.toBeInstanceOf(onlyPositiveNumber);
  });
});
