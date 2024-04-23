import { IsPrime } from "./isPrime";

interface PrimeNumbersProps {
   number: number;
}

export const PrimeNumberCalculator = ({ number}: PrimeNumbersProps) =>{
   const prime_list: number[] = [];

   const time0 = performance.now(); // start counting
   for(let i = 2; i <= number ; i++) {
     const current_number = i;

     if(IsPrime({ current_number })){
        prime_list.push(i);
     }
   }
   const time1 = performance.now(); // finish counting

   const execution_time = (time1 - time0).toFixed(2);

   return {prime_list, execution_time};
}