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

// src/repositories/in-memory/in-memory-prime-repository.ts
var in_memory_prime_repository_exports = {};
__export(in_memory_prime_repository_exports, {
  InMemoryPrimeRepository: () => InMemoryPrimeRepository
});
module.exports = __toCommonJS(in_memory_prime_repository_exports);
var InMemoryPrimeRepository = class {
  constructor() {
    this.lists = [];
  }
  async create(data) {
    const primes = {
      id: "1234",
      number: data.number,
      prime_list: data.prime_list,
      execution_time: data.execution_time
    };
    this.lists.push(primes);
    return primes;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryPrimeRepository
});
