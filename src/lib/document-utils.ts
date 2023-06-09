import IButtonDemo from "../types/i-button-demo";
import {
  customValidation,
  formatValidationError,
  typeInference,
  validateArray,
  validateObject,
  validateString,
} from "./demo";

export const buttons: IButtonDemo[] = [
  { text: "validate string", func: validateString },
  { text: "validate object", func: validateObject },
  { text: "validate array", func: validateArray },
  { text: "format validation error", func: formatValidationError },
  { text: "custom validation", func: customValidation },
  { text: "type inference", func: typeInference}
];

export function getButtonElems(): string[] {
  return buttons.map((button) => `<button>${button.text}</button>`);
}
