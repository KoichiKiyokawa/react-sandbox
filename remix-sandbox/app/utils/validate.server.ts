import { ZodSchema } from "zod";

/**
 * @param {Request} request
 * @param {ZodSchema} schema
 * @returns {{data: T, errors: string[]}} data: パースしたデータ, errors: エラーメッセージの配列
 *
 *
 * @example
 * ```
 * const { data, errors } = await validateRequestBySchema(request, schema);
 * if (errors) return { errors };
 * await db.user.create(data);
 * ```
 */
export const validateRequestBySchema = async <T>(
  request: Request,
  schema: ZodSchema<T>
): Promise<{ data: T | null; errors?: string[] }> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const result = schema.safeParse(data);
  if (!result.success) {
    return {
      data: null,
      errors: result.error.issues.map((issue) => issue.message),
    };
  }

  return { data: result.data };
};
