"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/http/route.ts
var route_exports = {};
__export(route_exports, {
  appRoutes: () => appRoutes
});
module.exports = __toCommonJS(route_exports);

// src/http/validation.ts
var import_zod = require("zod");
var numberBodySchema = import_zod.z.object({
  number: import_zod.z.number()
});

// src/middleware/check_number.ts
async function checkNumber(request, reply) {
  const { number } = numberBodySchema.parse(request.body);
  const method = "POST";
  if (number < 0 && request.method === method) {
    return reply.status(400).send({
      error: "O n\xFAmero deve ser positivo!"
    });
  }
}

// src/use-cases/error/check_number_error.ts
var onlyPositiveNumber = class extends Error {
  constructor() {
    super("Verifique os dados de entrada!");
  }
};

// src/utils/isPrime.ts
var IsPrime = ({ current_number }) => {
  if (current_number <= 1)
    return false;
  if (current_number <= 3)
    return true;
  if (current_number % 2 === 0 || current_number % 3 === 0)
    return false;
  let k = 5;
  while (k * k <= current_number) {
    if (current_number % k === 0 || current_number % (k + 2) === 0) {
      return false;
    }
    k += 6;
  }
  return true;
};

// src/utils/calculator.ts
var PrimeNumberCalculator = ({ number }) => {
  const prime_list = [];
  const time0 = performance.now();
  for (let i = 2; i <= number; i++) {
    const current_number = i;
    if (IsPrime({ current_number })) {
      prime_list.push(i);
    }
  }
  const time1 = performance.now();
  const execution_time = (time1 - time0).toFixed(2);
  return { prime_list, execution_time };
};

// src/lib/prisma.ts
var import_client = require("@prisma/client");

// src/env/index.ts
var import_dotenv = require("dotenv");
var import_zod2 = require("zod");
(0, import_dotenv.config)();
var envSchema = import_zod2.z.object({
  PORT: import_zod2.z.coerce.number().default(3333),
  DATABASE_URL: import_zod2.z.string(),
  NODE_ENV: import_zod2.z.enum(["development", "test", "production"]).default("development")
});
var _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("\u{1F534} Invalid enviroment variables!", _env.error.format());
  throw new Error("Invalid enviroment variables!");
}
var env = _env.data;

// src/lib/prisma.ts
var prisma = new import_client.PrismaClient({
  log: env.NODE_ENV === "development" ? ["query"] : []
});

// src/repositories/prisma/prisma-prime-repository.ts
var PrismaPrimeRepository = class {
  async create(data) {
    const primes = await prisma.primes.create({
      data
    });
    return primes;
  }
};

// src/use-cases/calculate.ts
var import_crypto = require("crypto");
var CalculateUseCase = class {
  constructor(primeRepository) {
    this.primeRepository = primeRepository;
  }
  async execute({
    number,
    execution_time,
    prime_list
  }) {
    if (number < 0) {
      throw new onlyPositiveNumber();
    }
    const data = {
      id: (0, import_crypto.randomUUID)(),
      number,
      prime_list,
      execution_time
    };
    await this.primeRepository.create(data);
    return { data };
  }
};

// src/use-cases/facture/make-calculate-use-case.ts
function MakeCalculateUseCase() {
  const prismaPrimeRepository = new PrismaPrimeRepository();
  const prismaUseCase = new CalculateUseCase(prismaPrimeRepository);
  return prismaUseCase;
}

// src/http/controllers/calculate.ts
async function calculateRoute(request, reply) {
  const { number } = numberBodySchema.parse(request.body);
  const response_data = [];
  try {
    const { prime_list, execution_time } = PrimeNumberCalculator({ number });
    const prismaUseCase = MakeCalculateUseCase();
    const response = await prismaUseCase.execute({ number, execution_time, prime_list });
    response_data.push(response.data);
  } catch (err) {
    if (err instanceof onlyPositiveNumber) {
      reply.status(400).send({ message: err.message });
    }
    throw err;
  }
  return reply.status(201).send(response_data);
}

// src/http/controllers/result.ts
async function resultRoute(request, reply) {
  const prime_lists = await prisma.primes.findMany();
  if (prime_lists.length === 0) {
    return reply.status(204).send({ message: "Sem nenhum historico" });
  }
  return prime_lists;
}

// src/http/route.ts
async function appRoutes(app) {
  app.get("/results", resultRoute);
  app.post(
    "/calculate",
    { preHandler: [checkNumber] },
    calculateRoute
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  appRoutes
});
