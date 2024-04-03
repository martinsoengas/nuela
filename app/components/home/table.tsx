import Link from 'next/link';

type SubjectData = {
  subject: string;
  subjectType: string;
  course: string;
  group: string;
  hours: number;
  space: string;
};

type TableProps = {
  teacherSubjects: SubjectData[];
};

export default function Table({ teacherSubjects }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border shadow-sm">
      <table className="min-w-full bg-white divide-y">
        <thead>
          <tr className="bg-[#FBFBFB] text-[#A5A5A5] text-sm">
            <th className="text-left py-3 px-4 font-normal">Nombre</th>
            <th className="text-left py-3 px-4 font-normal">Tipo</th>
            <th className="text-left py-3 px-4 font-normal">Curso</th>
            <th className="text-left py-3 px-4 font-normal">Grupo</th>
            <th className="text-left py-3 px-4 font-normal">Horas semana</th>
            <th className="text-left py-3 px-4 font-normal">Espacio Regular</th>
            <th className="text-left py-3 px-4 font-normal">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {teacherSubjects.map((subject, index) => (
            <tr key={index} className="text-[#5E5E5E] text-sm ">
              <td className="py-3 px-4">{subject.subject}</td>
              <td className="py-3 px-4">{subject.subjectType}</td>
              <td className="py-3 px-4">{subject.course}</td>
              <td className="py-3 px-4">{subject.group}</td>
              <td className="py-3 px-4">{subject.hours} h</td>
              <td className="py-3 px-4">{subject.space}</td>
              <td className="py-3 px-4 text-sm">
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 mr-2"
                >
                  Ver
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 mx-2"
                >
                  Editar
                </Link>
                <Link href="#" className="text-red-600 hover:text-red-700 mx-2">
                  Eliminar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
