import Header from '../components/home/header';
import Profile from '../components/home/profile';
import TimeCard from '../components/home/time-card';
import ToggleSwitch from '../components/home/toggle-switch';
import Tab from '../components/home/tab';
import Table from '../components/home/table';
import ModalKey from '../components/home/modal-key';

import {
  fetchTeacherProfile,
  fetchTeacherSubjects,
  fetchHoursByTeacher,
  fetchAllData,
} from '../lib/data';

const HARD_CODED_EMAIL = 'profesora123@colegio.com';
const HARD_CODED_COMP_HOURS = '0';

export default async function page() {
  const teacherProfile = await fetchTeacherProfile(HARD_CODED_EMAIL);
  const teacherSubjects = await fetchTeacherSubjects(HARD_CODED_EMAIL);
  const teacherHours =
    (await fetchHoursByTeacher(HARD_CODED_EMAIL))?.toString() || '0';
  const allData = await fetchAllData();

  return (
    <main className="bg-[#fbfbfa] h-screen">
      <div className="flex flex-col w-5/6 m-auto gap-3 py-10">
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
          <ModalKey formData={allData} teacherId={teacherProfile[0].id} />
        </div>

        <Table teacherSubjects={teacherSubjects} />
      </div>
    </main>
  );
}
