import { ProgressBar } from "./ProgressBar";
import { useAppSelector } from "@/redux/store";

export const FormHeader = () => {
  const step = useAppSelector((state) => state.form.step);
  const totalSteps = useAppSelector((state) => state.form.totalStep);

  return (
    <header className="flex flex-col items-start gap-3 self-stretch">
      <div className="flex items-center  max-md:items-start gap-3 justify-between w-full">
        <p className="text-white font-nanum-myeongjo text-[32px] max-md:text-[24px] font-normal leading-normal">
          {step === 1 || step === 2 ? "Ticket Selection" : "Ready"}
        </p>
        <p className="text-[#FAFAFA] font-roboto text-[16px] font-normal">
          Step {step}/{totalSteps}
        </p>
      </div>
      <ProgressBar />
    </header>
  );
};
