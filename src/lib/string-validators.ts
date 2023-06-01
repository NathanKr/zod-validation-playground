import z, { SafeParseReturnType } from "zod";

/**
 * validate value is string and return success \ failure indication
 * @param val 
 * @returns SafeParseSuccess<Output> | SafeParseError<Input>
 * 
 */
export function validateStringSafeParse(
  val: any
): SafeParseReturnType<string, string> {
  const schema = z.string();
  return schema.safeParse(val);
}

/**
 * validate value is string and throw if not
 * @param val 
 */
export function validateStringParse(val: any): void {
  const schema = z.string();
  schema.parse(val);
}
