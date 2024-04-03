export default function TimeCard({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex flex-col font-satoshi rounded-2xl bg-white p-4 gap-3 w-full">
      <h1 className="text-sm">{title}</h1>
      <h2 className="text-black text-3xl font-bold">{time} horas</h2>
    </div>
  );
}
