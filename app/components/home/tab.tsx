export default function Tab({
  title,
  isSelected,
}: {
  title: string;
  isSelected: boolean;
}) {
  return (
    <div
      className={`text-center text-sm p-4 font-semibold w-fit  ${
        isSelected
          ? 'text-[#635BFF] border-b border-[#635BFF]'
          : 'text-[#666666]'
      } `}
    >
      {title}
    </div>
  );
}
