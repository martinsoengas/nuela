import { inter } from '../../ui/fonts';

export default function Profile({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string | null;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <div
          className={`${inter.className} flex items-center justify-center w-24 h-24 text-[#5C37EB] rounded-lg text-5xl bg-gradient-to-b from-start-profile-gradient to-end-profile-gradient`}
        >
          {name
            .split(' ')
            .map((firstLetter) => firstLetter[0])
            .join('')}
        </div>
        <div className="flex flex-col justify-around text-sm">
          <div className="text-[#1A1919] text-2xl">{name}</div>
          <div className="text-[#5E5E5E]">{email}</div>
          <div className="text-[#666666]">{phone}</div>
        </div>
      </div>
      <div className="text-[#635BFF] text-sm">Editar</div>
    </div>
  );
}
