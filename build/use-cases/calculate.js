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

// src/use-cases/calculate.ts
var calculate_exports = {};
__export(calculate_exports, {
  CalculateUseCase: () => CalculateUseCase
});
module.exports = __toCommonJS(calculate_exports);

// src/use-cases/error/check_number_error.ts
var onlyPositiveNumber = class extends Error {
  constructor() {
    super("Verifique os dados de entrada!");
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CalculateUseCase
});
