import { SafeParseReturnType, z } from "zod";

export function validateArrayCharLength(
  array: string[],
  maxSumCharsInArray: number
): SafeParseReturnType<string[], string[]> {
  const sumChars = array.reduce((sum, item) => sum + item.length, 0);
  const message = `The total number of chars must be less than ${maxSumCharsInArray} but got ${sumChars}`;
  const schema = z
    .string()
    .array()
    .min(2)
    .max(4)
    .refine(() => sumChars <= maxSumCharsInArray, { message });
  return schema.safeParse(array);
}
