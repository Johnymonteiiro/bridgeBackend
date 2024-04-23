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

// src/lib/prisma.ts
var prisma_exports = {};
__export(prisma_exports, {
  prisma: () => prisma
});
module.exports = __toCommonJS(prisma_exports);
var import_client = require("@prisma/client");

// src/env/index.ts
var import_dotenv = require("dotenv");
var import_zod = require("zod");
(0, import_dotenv.config)();
var envSchema = import_zod.z.object({
  PORT: import_zod.z.coerce.number().default(3333),
  DATABASE_URL: import_zod.z.string(),
  NODE_ENV: import_zod.z.enum(["development", "test", "production"]).default("development")
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  prisma
});