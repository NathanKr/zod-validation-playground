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
export function validateStringParse(val: any): string {
  const schema = z.string();
  return schema.parse(val);
}

export function validateStringMinMax(val: any): string {
  const schema = z.string().min(3).max(5);
  return schema.parse(val);
}
