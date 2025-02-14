import { useAppSelector } from "@/redux/store";

export const ProgressBar = () => {
  const step = useAppSelector((state) => state.form.step);
  const totalSteps = useAppSelector((state) => state.form.totalStep);
  const progress = (step / totalSteps) * 100;
  return (
    <div className="flex h-[4px] items-center w-full rounded-[5px] bg-[#0E464F]">
      <div
        style={{ width: `${progress}%` }}
        className="self-stretch w-full rounded-[5px] bg-[#24A0B5]"
      ></div>
    </div>
  );
};
