/*  
    make sure its non empty  url string array that
    start with https://www.linkedin.com/in/ for profile url
 */

import { z } from "zod";

// --- verify simple string array not empty
export function validateStringArrayNotEmpty(
  ar: any
): z.SafeParseReturnType<string[], string[]> {
  const schema = z.string().array().nonempty();
  return schema.safeParse(ar);
}
