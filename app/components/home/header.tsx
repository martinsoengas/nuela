export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h1 className="text-2xl text-[#1A1919]">{title}</h1>
      <h2 className="text-sm text-[#5E5E5E]">{subtitle}</h2>
    </div>
  );
}
