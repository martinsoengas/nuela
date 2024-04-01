import Image from 'next/image';
import Link from 'next/link';
import {
  ClockIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CubeIcon,
  BookOpenIcon,
  BellIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Inicio',
    href: '#',
    icon: (
      <Image
        width={20}
        height={20}
        className="text-center"
        src="/images/inicio.svg"
        alt="Inicio"
      />
    ),
  },
  {
    name: 'Horarios',
    href: '#',
    icon: <ClockIcon className="h-5 w-5 text-[#121212]" />,
  },
  {
    name: 'Profesores',
    href: '#',
    icon: <AcademicCapIcon className="h-5 w-5 text-[#121212]" />,
  },
  {
    name: 'Familias',
    href: '#',
    icon: <UserGroupIcon className="h-5 w-5 text-[#121212]" />,
  },
  {
    name: 'Espacios',
    href: '#',
    icon: <CubeIcon className="h-5 w-5 text-[#121212]" />,
  },
  {
    name: 'Asignaturas',
    href: '#',
    icon: <BookOpenIcon className="h-5 w-5 text-[#121212]" />,
  },
  {
    name: 'Notificaciones',
    href: '#',
    icon: <BellIcon className="h-5 w-5 text-[#121212]" />,
  },
  {
    name: 'Settings',
    href: '#',
    icon: <Cog6ToothIcon className="h-5 w-5 text-[#121212]" />,
  },
];

export default function SideNav() {
  return (
    <div className="h-screen sticky top-0 bg-white w-64">
      <div className="flex flex-col mx-3">
        <div className="my-10 p-2 flex justify-between items-center">
          <div className="text-sm items-center flex gap-1">
            <div className="w-6 h-6 border rounded-md overflow-hidden flex items-center">
              <Image
                src="/images/tajamar.svg"
                alt="Logo"
                width={24}
                height={24}
              />
            </div>
            <div>Tajamar</div>
          </div>
          <div className="relative">
            <div className="w-6 h-6 rounded-full bg-[#F6F6F6] text-center">
              <div>J</div>
            </div>
            <div className="absolute bottom-0 right-0 rounded-full w-2 h-2 bg-[#7CC731] border border-white"></div>
          </div>
        </div>

        <nav>
          {navigation.map((item) => (
            <Link
              className="flex items-center p-2 hover:bg-[#F6F6F6] rounded-lg text-sm line-height-1.5 gap-2"
              href={item.href}
              key={item.name}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
