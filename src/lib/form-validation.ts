import { ZodFormattedError, z } from "zod";
import { UserFromClass } from "../types/e-user-form";

function getInput(c: UserFromClass): HTMLInputElement {
  return document.querySelector(`.${c}`)!;
}

function getError(c: UserFromClass): HTMLParagraphElement {
  return document.querySelector(`.${c}`)!;
}

const formZodSchema = z.object({
  name: z.string().min(4).max(7),
  email: z.string().email(), // how email help ???
  age: z.number().min(18).max(65),
});

const getNameVal = () => getInput(UserFromClass.name).value;
const getNameError = () => getError(UserFromClass.nameErr)!;
const getEmailVal = () => getInput(UserFromClass.email).value;
const getEmailError = () => getError(UserFromClass.emailErr)!;
const getAgeVal = () => getInput(UserFromClass.age).valueAsNumber;
const getAgeError = () => getError(UserFromClass.ageErr)!;

export function validateFormWithZod(): void {
  console.log(" ------- invoke validateFormWithZod ------- ");

  const validationResult = formZodSchema.safeParse({
    name: getNameVal(),
    email: getEmailVal(),
    age: getAgeVal(),
  });

  if (validationResult.success) {
    getNameError().innerText =
      getEmailError().innerText =
      getAgeError().innerText =
        "";
  } else {
    const formatted = validationResult.error.format();
    getNameError().innerText = formatted.name?._errors.join(" , ") ?? "";
    getEmailError().innerText = formatted.email?._errors.join(" , ") ?? "";
    getAgeError().innerText = formatted.age?._errors.join(" , ") ?? "";
  }
}

export function validateFormWithoutZod(): void {
  console.log(" ------- invoke validateFormWithoutZod ------- ");

  // --- name validation
  if (!getNameVal()) {
    getNameError().innerText = "Name is required";
  } else if (getNameVal().length < 4) {
    getNameError().innerText = "Name must have length of at least 4";
  } else if (getNameVal().length > 7) {
    getNameError().innerText = "Name must have length no more than 7";
  } else {
    getNameError().innerText = "";
  }

  // --- email validation
  if (!getEmailVal()) {
    getEmailError().innerText = "Email is required";
  } else {
    getEmailError().innerText = "";
  }

  // --- age validation
  if (!getAgeVal()) {
    getAgeError().innerText = "age is required";
  } else if (Number(getAgeVal()) > 65) {
    getAgeError().innerText = "age should not be above 65";
  } else if (Number(getAgeVal()) < 18) {
    getAgeError().innerText = "age should not be below 18";
  } else {
    getAgeError().innerText = "";
  }
}
