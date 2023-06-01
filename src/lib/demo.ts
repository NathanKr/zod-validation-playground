import { IPerson } from "../types/i-person";
import { validatePerson } from "./object-validators";
import {
  validateStringMinMax,
  validateStringParse,
  validateStringSafeParse,
} from "./string-validators";

export function validateObject() {
  console.log(
    "************************* validateObject **********************"
  );
  const personOk: IPerson = {
    name: "John Doe",
    age: 10,
  };

  validatePerson(personOk); // should not throw
  console.log("validatePerson(personOk) does not throw");

  try {
    validatePerson(null); // should  throw
  } catch (err) {
    console.log("validatePerson(null) throw");
    console.log(err);
  }
}

export function validateString() {
  console.log(
    "************************* validateString **********************"
  );

  console.log('--------- safeParse --------');
  console.log(validateStringSafeParse("111")); //  { success: true, data: "111" }
  console.log(validateStringSafeParse(111)); // { success: false, error: Getter }
  console.log(validateStringSafeParse(true)); // { success: false, error: Getter }

  validateStringParse("111"); // ok
  console.log('validateStringParse("111") does not throw');

  console.log('--------- parse --------');
  try {
    validateStringParse(111); // throw
  } catch (err) {
    console.log("validateStringParse(111)  throw");
    console.log(err);
  }
  try {
    validateStringParse(true); // throw
  } catch (err) {
    console.log('validateStringParse(true);  throw')
    console.log(err);
  }

  console.log('--------- min max --------');
  validateStringMinMax("ab12"); // ok , not throw
  console.log('validateStringMinMax("ab12") does not throw');
  
  try {
    validateStringMinMax("ab1222");; // throw because max len is 5
  } catch (err) {
    console.log('validateStringMinMax("ab1222") throw');
    console.log(err);
  }
}
