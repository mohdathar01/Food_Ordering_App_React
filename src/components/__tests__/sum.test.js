 import {Sum} from "../Sum";


 test("Sum function should  calculate the sum of two functions",()=>{

   const result=Sum(3,4);


   // this is known as Assertion
   expect(result).toBe(7);
 })