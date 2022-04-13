import { useForm } from "react-hook-form";
import { Button } from "~/domains/ui/Button";
import { TextInput } from "~/domains/ui/TextInput";
import type { MultipleForm } from "../../model";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "~/domains/multiple_form/model";
import type { StepComponentProps } from "./type";
import { useEffect } from "react";

export const Step2 = ({ onNext, data, setData }: StepComponentProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<MultipleForm>({
    defaultValues: data,
    resolver: zodResolver(step2Schema),
  });
  const onSubmit = () => {
    onNext();
  };
  useEffect(() => {
    return () => {
      setData((prev) => ({ ...prev, ...getValues() }));
    };
  }, [getValues, setData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>step2</h2>
      <TextInput {...register("step2Input")} error={errors.step2Input} />
      <Button>next</Button>
    </form>
  );
};
