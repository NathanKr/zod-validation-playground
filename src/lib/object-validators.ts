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

export const schemaUser = z.object({
  name: z.string(),
  age: z.number(),
});

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
  return schemaUser.safeParse(person);
}

/**
 *
 * @param profileUrls expect array with profile url length 1-2
 * @param messageParagraphas expect string array with length of at least 3
 * @returns
 * todo nath : type may be better than SafeParseReturnType<any, any>
 */
export function validateSendMessageProfilesParams(
  profileUrls: string[],
  messageParagraphas: string[]
): SafeParseReturnType<any, any> {
  const schema = z.object({
    profileUrls: z
      .string()
      .startsWith("https://www.linkedin.com/in/")
      .url()
      .array()
      .max(2)
      .nonempty(),
    messageParagraphas: z.string().array().min(3),
  });

  return schema.safeParse({ profileUrls, messageParagraphas });
}
