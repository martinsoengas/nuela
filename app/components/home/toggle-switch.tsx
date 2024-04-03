export default function ToggleSwitch({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) {
  return (
    <div className="bg-[#F5F5F5] text-sm flex rounded-xl w-60 items-center justify-center">
      <div className="m-1 p-3 bg-white rounded-xl w-full text-center shadow-sm text-[#121212]">
        {title1}
      </div>
      <div className="p-3 w-full text-center text-[#5E5E5E]">{title2}</div>
    </div>
  );
}
