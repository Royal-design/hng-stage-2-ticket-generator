import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { useAppSelector } from "@/redux/store";
import { Ticket } from "./Ticket";

export const MultiStepForm = () => {
  const step = useAppSelector((state) => state.form.step);

  return (
    <div className="flex w-full justify-center  items-center   pt-[46px] pb-[112px] max-md:pt-[20px] max-md:h-auto  ">
      {step === 1 && <Form1 />}
      {step === 2 && <Form2 />}
      {step === 3 && <Ticket />}
    </div>
  );
};
