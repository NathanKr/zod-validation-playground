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

/* 
     validate url array with at least one
     items and prefix https://www.linkedin.com/in/ 
*/
export function validateLinkedinProfilesUrl(
  profileUrls: any
): z.SafeParseReturnType<string[], string[]> {
  const schema = z
    .string()
    .startsWith("https://www.linkedin.com/in/")
    .url()
    .array()
    .nonempty();
  return schema.safeParse(profileUrls);
}
