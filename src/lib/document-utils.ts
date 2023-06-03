import IButtonDemo from "../types/i-button-demo";
import { validateArray, validateObject, validateString } from "./demo";

export const buttons: IButtonDemo[] = [
  { text: "validate string" , func: validateString },
  { text: "validate object" , func: validateObject },
  { text: "validate array", func: validateArray },
  { text: "validation error", func: validationError },
];

export function getButtonElems() : string []{
  return buttons.map((button) => `<button>${button.text}</button>`);
}

function validationError(): void {
  throw new Error("Function not implemented.");
}

