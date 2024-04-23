import { config } from "dotenv";
import { z } from "zod";

config()

const envSchema = z.object({
    PORT:z.coerce.number().default(3333),
    DATABASE_URL: z.string(),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false) {

  console.error('🔴 Invalid enviroment variables!', _env.error.format())

  throw new Error('Invalid enviroment variables!')
}

export const env = _env.data;
