import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { useAppSelector } from "@/redux/store";
import { Ticket } from "./Ticket";

export const MultiStepForm = () => {
  const step = useAppSelector((state) => state.form.step);

  return (
    <div className="flex w-full flex-col items-center h-auto  pt-[46px] pb-[112px] max-md:pt-[20px] max-md:h-auto bg-[#02191D] bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.2)_0%,rgba(36,160,181,0)_100%)] ">
      {step === 1 && <Form1 />}
      {step === 2 && <Form2 />}
      {step === 3 && <Ticket />}
    </div>
  );
};
