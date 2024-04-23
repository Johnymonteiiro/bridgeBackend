import { Primes } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { onlyPositiveNumber } from "../../use-cases/error/check_number_error";
import { PrimeNumberCalculator } from "../../utils/calculator";
import { numberBodySchema } from "../validation";
import { MakeCalculateUseCase } from "../../use-cases/facture/make-calculate-use-case";

export async function calculateRoute(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { number } = numberBodySchema.parse(request.body);
  const response_data: Primes[] = [];
  try {

    const { prime_list, execution_time } = PrimeNumberCalculator({number});

    const prismaUseCase = MakeCalculateUseCase()
    const response = await prismaUseCase.execute({number, execution_time,prime_list});

    response_data.push(response.data);
    
  } catch (err) {
    if (err instanceof onlyPositiveNumber) {
      reply.status(400).send({ message: err.message });
    }

    throw err;
  }

  return reply.status(201).send(response_data);
}
