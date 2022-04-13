import type { MultipleForm } from "../../model";

type Props = {
  data: MultipleForm;
};

export const Confirm = ({ data }: Props) => {
  return (
    <div>
      <h3>Confirm</h3>
      <p>step1Input: {data.step1Input}</p>
      <p>step2Input: {data.step2Input}</p>
      <p>step3Input: {data.step3Input}</p>
    </div>
  );
};
