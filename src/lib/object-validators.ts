import { SafeParseReturnType, z } from "zod";

/**
 * validate user object - should i use IPerson instead of any ??
 * throw if not
 * @param person
 */
export function validatePersonParse(person: any): {
  name: string;
  age: number;
} {
  const schemaUser = z.object({
    name: z.string(),
    age: z.number(),
  });
  return schemaUser.parse(person);
}

export function validatePersonSafeParse(person: any): SafeParseReturnType<
  {
    name: string;
    age: number;
  },
  {
    name: string;
    age: number;
  }
> {
  const schemaUser = z.object({
    name: z.string(),
    age: z.number(),
  });
  return schemaUser.safeParse(person);
}
