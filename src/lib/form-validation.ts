import { UserFromClass } from "../types/e-user-form";

function getInput(c: UserFromClass): HTMLInputElement {
  return document.querySelector(`.${c}`)!;
}

function getError(c: UserFromClass): HTMLParagraphElement {
  return document.querySelector(`.${c}`)!;
}

export function validateForm(): void {
  // --- name validation
  const nameVal = getInput(UserFromClass.name).value;
  const nameError = getError(UserFromClass.nameErr)!;
  if (nameVal == "") {
    nameError.innerText = "Name is required";
  } else if (nameVal.length < 4) {
    nameError.innerText = "Name must have length great than 3";
  } else if (nameVal.length > 7) {
    nameError.innerText = "Name must have length less than 8";
  } else {
    nameError.innerText = "";
  }

  // --- email validation
  const emailVal = getInput(UserFromClass.email).value;
  const emailError = getError(UserFromClass.emailErr)!;
  if (emailVal == "") {
    emailError.innerText = "Email is required";
  } else {
    emailError.innerText = "";
  }

  // --- age validation
  const ageVal = getInput(UserFromClass.age).value;
  const ageError = getError(UserFromClass.ageErr)!;
  if (ageVal == "") {
    ageError.innerText = "age is required";
  } else if (Number(ageVal) > 65) {
    ageError.innerText = "age must be less than 65";
  } else if (Number(ageVal) < 18) {
    ageError.innerText = "age must be great than 18";
  } else {
    ageError.innerText = "";
  }
}
