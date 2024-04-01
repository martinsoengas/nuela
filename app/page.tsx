import Header from './components/home/header';
import Profile from './components/home/profile';

import { fetchTeacherProfile, fetchTeacherSubjects } from './lib/data';

const HARD_CODED_EMAIL = 'profesora123@colegio.com';

export default async function page() {
  const teacherProfile = await fetchTeacherProfile(HARD_CODED_EMAIL);
  const teacherSubjects = await fetchTeacherSubjects(HARD_CODED_EMAIL);

  return (
    <main className="bg-[#fbfbfa] h-screen">
      <div className="flex flex-col w-5/6 m-auto gap-3 pt-10">
        <Header title="Profesores" subtitle="Crea y gestiona los profesores" />
        <div className="border-t border-gray-200"></div>
        <Profile {...teacherProfile[0]} />
        <div className="border-t border-gray-200"></div>
      </div>
    </main>
  );
}
