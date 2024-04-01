import Header from './components/home/header';
import Profile from './components/home/profile';
import TimeCard from './components/home/time-card';
import ToggleSwitch from './components/home/toggle-switch';
import Tab from './components/home/tab';
import Button from './components/home/button';
import Table from './components/home/table';
import { PlusIcon } from '@heroicons/react/24/outline';

import {
  fetchTeacherProfile,
  fetchTeacherSubjects,
  fetchHoursByTeacher,
} from './lib/data';

const HARD_CODED_EMAIL = 'profesora123@colegio.com';
const HARD_CODED_COMP_HOURS = '0';
const PLUS_ICON = <PlusIcon className="w-4 h-4 text-white" />;

export default async function page() {
  const teacherProfile = await fetchTeacherProfile(HARD_CODED_EMAIL);
  const teacherSubjects = await fetchTeacherSubjects(HARD_CODED_EMAIL);
  const teacherHours =
    (await fetchHoursByTeacher(HARD_CODED_EMAIL))?.toString() || '0';

  return (
    <main className="bg-[#fbfbfa] h-screen">
      <div className="flex flex-col w-5/6 m-auto gap-3 pt-10">
        <Header title="Profesores" subtitle="Crea y gestiona los profesores" />

        <div className="border-t border-gray-200"></div>

        <Profile {...teacherProfile[0]} />

        <div className="border-t border-gray-200"></div>

        <div className="my-3 flex flex-col gap-3">
          <div className="m-auto">
            <ToggleSwitch title1="Semanal" title2="Anual" />
          </div>
          <div className="flex gap-3 w-full">
            <TimeCard title="Horas totales" time={teacherHours} />
            <TimeCard title="Horas lectivas" time={teacherHours} />
            <TimeCard
              title="Horas complementarias"
              time={HARD_CODED_COMP_HOURS}
            />
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="flex gap-3">
          <Tab title="Horas Lectivas" isSelected={true} />
          <Tab title="Horas Complementarias" isSelected={false} />
        </div>

        <div className="flex justify-end">
          <Button icon={PLUS_ICON} title="Añadir Asignatura" />
        </div>

        <Table teacherSubjects={teacherSubjects} />
      </div>
    </main>
  );
}
