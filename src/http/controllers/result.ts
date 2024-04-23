import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";

export async function resultRoute(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const prime_lists = await prisma.primes.findMany();
  if (prime_lists.length === 0) {
    return reply.status(204).send({ message: "Sem nenhum historico" });
  }
  return prime_lists;
}
