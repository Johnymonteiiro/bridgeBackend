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

// src/middleware/check_number.ts
var check_number_exports = {};
__export(check_number_exports, {
  checkNumber: () => checkNumber
});
module.exports = __toCommonJS(check_number_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkNumber
});
