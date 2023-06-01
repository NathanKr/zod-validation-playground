import { IPerson } from "../types/i-person";
import { validatePerson } from "./object-validators";
import {
  validateStringParse,
  validateStringSafeParse,
} from "./string-validators";

export function validateObject() {
  console.log('************************* validateObject **********************');
  const personOk: IPerson = {
    name: "John Doe",
    age: 10,
  };

  validatePerson(personOk); // should not throw
  console.log('validatePerson(personOk) does not throw');

  try {
    validatePerson(null); // should  throw
  } catch (err) {
    console.log(err);
  }
}

export function validateString() {
  console.log('************************* validateString **********************');
  
  console.log(validateStringSafeParse("111")); //  { success: true, data: "111" }
  console.log(validateStringSafeParse(111)); // { success: false, error: Getter }
  console.log(validateStringSafeParse(true)); // { success: false, error: Getter }

  validateStringParse("111"); // ok
  console.log('validateStringParse("111") does not throw');

  try {
    validateStringParse(111); // throw
  } catch (err) {
    console.log(err);
  }
  try {
    validateStringParse(true); // throw
  } catch (err) {
    console.log(err);
  }
}
