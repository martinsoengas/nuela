import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';
import { ReactElement } from 'react';

export default function Button({
  icon,
  title,
}: {
  icon: ReactElement;
  title: string;
}) {
  return (
    <Link
      className="bg-[#635BFF] text-white rounded-lg p-3 w-fit text-sm flex gap-2 items-center"
      href={'#'}
    >
      {icon}
      <div>{title}</div>
    </Link>
  );
}
