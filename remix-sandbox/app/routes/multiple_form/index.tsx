import { useState } from "react";
import { type ActionFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";
import { Confirm } from "~/domains/multiple_form/components/steps/Confirm";
import { Step1 } from "~/domains/multiple_form/components/steps/Step1";
import { Step2 } from "~/domains/multiple_form/components/steps/Step2";
import type { MultipleForm } from "~/domains/multiple_form/model";

export const action: ActionFunction = () => {
  // TODO
};

const MultipleFormIndex = () => {
  const stepComponents = [Step1, Step2, Confirm];
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStepIndex = Number(searchParams.get("step"));
  const CurrentStepComponent = stepComponents[currentStepIndex];

  const goBack = () => setSearchParams(`step=${currentStepIndex - 1}`);
  const goNext = () => setSearchParams(`step=${currentStepIndex + 1}`);
  const onNext = () => {
    if (currentStepIndex < stepComponents.length - 1) {
      goNext();
    } else {
      // TODO: action
    }
  };

  const [data, setData] = useState<MultipleForm>({} as MultipleForm);

  return (
    <div className="container mx-auto">
      {currentStepIndex > 0 && (
        <button onClick={goBack} className="text-blue-400">
          go back prev step
        </button>
      )}
      <CurrentStepComponent onNext={onNext} data={data} setData={setData} />
    </div>
  );
};

export default MultipleFormIndex;
