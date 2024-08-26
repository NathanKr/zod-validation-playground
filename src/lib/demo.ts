import { ZodError, z } from "zod";
import { IPerson } from "../types/i-person";
import {
  validateArrayMinMaxComplex,
  validateLinkedinProfilesUrl,
  validateStringArrayNotEmpty,
} from "./array-validators";
import { validateArrayCharLength } from "./custom-validation";
import {
  schemaUser,
  schemaUserRestrict,
  validatePersonParse,
  validatePersonSafeParse,
  validateSendMessageProfilesParams,
} from "./object-validators";
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

  validatePersonParse(personOk); // should not throw
  console.log("validatePersonParse(personOk) does not throw");

  try {
    validatePersonParse({ name: 11 }); // should  throw
  } catch (err) {
    console.log("validatePersonParse({name : 11}) throw");
    console.log(err);
  }

  try {
    validatePersonParse(null); // should  throw
  } catch (err) {
    console.log("validatePersonParse(null) throw");
    console.log((err as ZodError).issues);
  }

  console.log(
    "------------------- validateSendMessageProfilesParams -----------"
  );
  const messageParagraphas = [""];
  const profileUrls = [
    "https://www.linkedin.com/in/sarit-egri-08904121b/",
    "https://www.linkedin.com/in/sarit-egri-08904121b/",
  ];
  console.log(
    "should fail because messageParagraphas has only 1 item but min number is 3"
  );

  console.log(
    validateSendMessageProfilesParams(profileUrls, messageParagraphas)
  );
}

export function validateString() {
  console.log(
    "************************* validateString **********************"
  );

  console.log("--------- safeParse --------");
  console.log(validateStringSafeParse("111")); //  { success: true, data: "111" }
  console.log(validateStringSafeParse(111)); // { success: false, error: Getter }
  console.log(validateStringSafeParse(true)); // { success: false, error: Getter }

  validateStringParse("111"); // ok
  console.log('validateStringParse("111") does not throw');

  console.log("--------- parse --------");
  try {
    validateStringParse(111); // throw
  } catch (err) {
    console.log("validateStringParse(111)  throw");
    console.log(err);
  }
  try {
    validateStringParse(true); // throw
  } catch (err) {
    console.log("validateStringParse(true);  throw");
    console.log(err);
  }

  console.log("--------- min max --------");
  validateStringMinMax("ab12"); // ok , not throw
  console.log('validateStringMinMax("ab12") does not throw');

  try {
    validateStringMinMax("ab1222"); // throw because max len is 5
  } catch (err) {
    console.log('validateStringMinMax("ab1222") throw');
    console.log(err);
  }
}

export function validateArray() {
  console.log("************************* validateArray **********************");

  console.log(
    "\n-------- validate string array with at least one items -------"
  );

  console.log('validateStringArrayNotEmpty(["1","2","3"]) --> ok');
  console.log(validateStringArrayNotEmpty(["1", "2", "3"])); // -- ok

  console.log('validateStringArrayNotEmpty([1,"2","3"]) --> error ');
  console.log(validateStringArrayNotEmpty([1, "2", "3"])); // -- not ok

  console.log("validateStringArrayNotEmpty([]) --> error ");
  console.log(validateStringArrayNotEmpty([])); // --> not ok

  console.log("validateStringArrayNotEmpty([1]) --> error ");
  console.log(validateStringArrayNotEmpty([1])); // --> not ok

  console.log(
    "\n-------- validate url array with at least one items and prefix https://www.linkedin.com/in/ -------"
  );
  console.log("validateLinkedinProfilesUrl([]) --> error ");
  console.log(validateLinkedinProfilesUrl([])); // --> not ok

  console.log('validateLinkedinProfilesUrl(["123"]) --> error ');
  console.log(validateLinkedinProfilesUrl(["123"])); // --> not ok

  console.log('validateLinkedinProfilesUrl(["123","abc"]) --> error ');
  console.log(validateLinkedinProfilesUrl(["123", "abc"])); // --> not ok

  console.log(
    'validateLinkedinProfilesUrl(["https://www.linkedin.com/"]) --> error '
  );
  console.log(validateLinkedinProfilesUrl(["https://www.linkedin.com/"])); // --> not ok

  console.log(
    'validateLinkedinProfilesUrl(["https://www.linkedin.com/in/", "1"]) --> not ok '
  );
  console.log(
    validateLinkedinProfilesUrl(["https://www.linkedin.com/in/", "1"])
  ); // -->  not ok

  console.log(
    'validateLinkedinProfilesUrl(["https://www.linkedin.com/in/"]) --> ok '
  );
  console.log(validateLinkedinProfilesUrl(["https://www.linkedin.com/in/"])); // -->  ok

  console.log(
    'validateLinkedinProfilesUrl(["https://www.linkedin.com/in/nathankrasney"]) --> ok '
  );
  console.log(
    validateLinkedinProfilesUrl(["https://www.linkedin.com/in/nathankrasney"])
  ); // -->  ok

  console.log(
    "\n-------- validate array with limit on length 5-10 items and item size - 5 char -------"
  );

  console.log("array with items in range ---> ok");
  console.log(
    validateArrayMinMaxComplex(["111", "222", "333", "444", "555", "666"])
  );

  console.log(
    'validateArrayMinMaxComplex(["111","222","333"]) --> error , array len too small'
  );
  console.log(validateArrayMinMaxComplex(["111", "222", "333"]));

  console.log("array with too many items ---> error");
  console.log(
    validateArrayMinMaxComplex([
      "111",
      "222",
      "333",
      "444",
      "555",
      "666",
      "777",
      "888",
      "999",
      "100",
      "110",
    ])
  );

  console.log("array with items in range but small ---> ok");
  console.log(
    validateArrayMinMaxComplex(["111", "22", "333", "444", "555", "666"])
  );
}

export function typeInference(){
  console.log(
    '"*************************  typeInference   **********************"'
  );

  // --- the old way --> no typescript error
  console.log('validatePersonSafeParse({name : "John"}) ---> not ');
  console.log(validatePersonSafeParse({name : "John"}));
   
  /* --- the new way  ---> infer type from schema and use for input --> 
        you get type error on development for changes in the schema !!!!*/
   
  const person  : z.infer<typeof schemaUser> =  {
    name: "john",
    age: 10
  }      
  console.log('validatePersonSafeParse(person) ---> all properties must exist because z.infer is used');
  console.log(validatePersonSafeParse(person));

  const person1  : z.infer<typeof schemaUserRestrict> =  {
    name: "",
    age: 10
  }      
  
  console.log(`person1 use infered schemaUserRestrict`);
  console.log(person1);
  console.log(`schemaUserRestrict.safeParse(person1)`);
  console.log(schemaUserRestrict.safeParse(person1));
}


export function customValidation() {
  console.log(
    '"*************************  customValidation   **********************"'
  );
  let maxSumCharsInArray = 5;
  console.log(
    `validateArrayCharLength(["123","abc"],${maxSumCharsInArray}) --> not ok , check error in console`
  );
  console.log(validateArrayCharLength(["123", "abc"], maxSumCharsInArray));

  maxSumCharsInArray = 10;
  console.log(
    `validateArrayCharLength(["123","abc"],${maxSumCharsInArray}) -->  ok`
  );
  console.log(validateArrayCharLength(["123", "abc"], maxSumCharsInArray));
}

export function formatValidationError() {
  console.log(
    "************************* formatValidationError **********************"
  );
  const validationResult = validatePersonSafeParse({ name: 123 });
  if (!validationResult.success) {
    console.log(
      "validatePersonSafeParse({name:123}) ---> show validationResult.error"
    );
    console.log(validationResult.error);

    console.log(
      "validatePersonSafeParse({name:123}) ---> show validationResult.error.errors"
    );
    console.log(validationResult.error.errors);

    console.log(
      "validatePersonSafeParse({name:123}) ---> validationResult.error.format()"
    );
    const formatted = validationResult.error.format();
    console.log(formatted);

    console.log("show name errors");
    console.log(formatted.name?._errors);

    console.log("show age errors");
    console.log(formatted.age?._errors);
  }
}
