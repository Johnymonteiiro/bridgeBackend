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

// src/use-cases/error/check_number_error.ts
var check_number_error_exports = {};
__export(check_number_error_exports, {
  onlyPositiveNumber: () => onlyPositiveNumber
});
module.exports = __toCommonJS(check_number_error_exports);
var onlyPositiveNumber = class extends Error {
  constructor() {
    super("Verifique os dados de entrada!");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  onlyPositiveNumber
});
