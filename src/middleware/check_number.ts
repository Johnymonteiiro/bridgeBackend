import { FastifyReply, FastifyRequest } from 'fastify';
import { numberBodySchema } from '../http/validation';

export async function checkNumber(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const { number } = numberBodySchema.parse(request.body);
  const method = 'POST'
  if (number < 0 && request.method === method) {
    return reply.status(400).send({
      error: 'O número deve ser positivo!',
    })
  }
}
