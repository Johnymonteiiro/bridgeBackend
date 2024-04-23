import { IsPrimeProps } from "../types/number";

export const IsPrime = ({ current_number }: IsPrimeProps) => {
  if (current_number <= 1) return false;
  if (current_number <= 3) return true;

  if (current_number % 2 === 0 || current_number % 3 === 0) return false;

  let k = 5;
  while (k * k <= current_number) {
    if (current_number % k === 0 || current_number % (k + 2) === 0) {
      return false;
    }
    k += 6;
  }

  return true;
};
