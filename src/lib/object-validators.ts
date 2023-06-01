import { z } from "zod";

/**
 * validate user object
 * throw if not
 * @param person 
 */
export function validatePerson(person: any): void {
  const schemaUser = z.object({
    name: z.string(),
    age: z.number(),
  });
  schemaUser.parse(person);
}
