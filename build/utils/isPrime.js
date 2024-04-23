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

// src/utils/isPrime.ts
var isPrime_exports = {};
__export(isPrime_exports, {
  IsPrime: () => IsPrime
});
module.exports = __toCommonJS(isPrime_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IsPrime
});
