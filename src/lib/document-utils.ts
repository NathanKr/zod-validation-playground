import IButtonDemo from "../types/i-button-demo";
import { validateArray, validateObject, validateString } from "./demo";

export const buttons: IButtonDemo[] = [
  { text: "validate string", func: validateString },
  { text: "validate object", func: validateObject },
  { text: "validate array", func: validateArray },
];

export function getButtonElems() {
  return buttons.map((button) => `<button>${button.text}</button>`);
}


