import { z } from 'zod'

export const numberBodySchema = z.object({
  number: z.number()
})
