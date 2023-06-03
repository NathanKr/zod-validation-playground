import IButtonDemo from "../types/i-button-demo";
import {
  showValidationError,
  validateArray,
  validateObject,
  validateString,
} from "./demo";

export const buttons: IButtonDemo[] = [
  { text: "validate string", func: validateString },
  { text: "validate object", func: validateObject },
  { text: "validate array", func: validateArray },
  { text: "show validation error", func: showValidationError },
];

export function getButtonElems(): string[] {
  return buttons.map((button) => `<button>${button.text}</button>`);
}
