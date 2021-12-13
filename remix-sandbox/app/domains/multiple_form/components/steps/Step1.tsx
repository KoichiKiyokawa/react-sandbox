import { useForm } from "react-hook-form";
import { Button } from "~/domains/ui/Button";
import { TextInput } from "~/domains/ui/TextInput";
import { MultipleForm } from "../../model";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "~/domains/multiple_form/model";
import { useEffect } from "react";
import { StepComponentProps } from "./type";

export const Step1 = ({ onNext, data, setData }: StepComponentProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<MultipleForm>({
    defaultValues: data,
    resolver: zodResolver(step1Schema),
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h2>step1</h2>
      <TextInput {...register("step1Input")} error={errors.step1Input} />
      <Button className="mt-8">next</Button>
    </form>
  );
};
