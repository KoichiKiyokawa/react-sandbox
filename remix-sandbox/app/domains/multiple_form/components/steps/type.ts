import { MultipleForm } from "../../model";

export type StepComponentProps = {
  onNext: () => void;
  data: MultipleForm;
  setData: React.Dispatch<React.SetStateAction<MultipleForm>>;
};
