import { z, ZodTypeAny } from "zod";

export type MultipleForm = {
  step1Input: string;
  step2Input: string;
  step3Input: string;
};

export const step1Schema = z.object<Record<keyof Pick<MultipleForm, "step1Input">, ZodTypeAny>>({
  step1Input: z.string().min(5),
});

export const step2Schema = z.object<Record<keyof Pick<MultipleForm, "step2Input">, ZodTypeAny>>({
  step2Input: z.string().min(5),
});

export const step3Schema = z.object<Record<keyof Pick<MultipleForm, "step3Input">, ZodTypeAny>>({
  step3Input: z.string().min(5),
});
