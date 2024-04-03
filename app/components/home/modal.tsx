'use client';

import { useState } from 'react';

import Button from './button';
import { PlusIcon } from '@heroicons/react/24/outline';
import { createTeacherSubject } from '../../lib/actions';
import { allData } from '../../lib/definitions';
import { useFormState, useFormStatus } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';

const PLUS_ICON = <PlusIcon className="w-4 h-4 text-white" />;

export default function Modal({
  formData,
  teacherId,
  onReset,
}: {
  formData: allData;
  teacherId: number;
  onReset: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, formAction] = useFormState(createTeacherSubject, false);

  if (state) {
    setTimeout(() => {
      onReset();
    }, 500);
  }

  return (
    <div>
      {isOpen && !state && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <form action={formAction}>
              <div className="flex items-center justify-between mb-5">
                <div className="text-[#121212]">Añadir asignatura</div>
                <XMarkIcon
                  className="w-5 h-5 text-[#5E5E5E] ml-auto cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <div className="hidden">
                <select id="teacherId" name="teacherId" defaultValue="">
                  <option key={teacherId} value={teacherId}></option>
                </select>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm">
                    Selecciona la asignatura
                  </label>
                  <select
                    id="subject"
                    name="subjectId"
                    defaultValue=""
                    className="border p-2 rounded-lg text-[#A5A5A5] text-sm"
                  >
                    {formData.subjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subjectType" className="text-sm">
                    Tipo de asignatura
                  </label>
                  <select
                    id="subjectType"
                    name="subjectTypeId"
                    defaultValue=""
                    className="border p-2 rounded-lg text-[#A5A5A5] text-sm"
                  >
                    {formData.subjectTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="course" className="text-sm">
                    Curso
                  </label>
                  <select
                    id="course"
                    name="courseId"
                    defaultValue=""
                    className="border p-2 rounded-lg text-[#A5A5A5] text-sm"
                  >
                    {formData.courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.level}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="group" className="text-sm">
                    Grupo
                  </label>
                  <select
                    id="group"
                    name="groupId"
                    defaultValue=""
                    className="border p-2 rounded-lg text-[#A5A5A5] text-sm"
                  >
                    {formData.groups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="hours" className="text-sm">
                    Horas
                  </label>
                  <select
                    id="hours"
                    name="hours"
                    defaultValue=""
                    className="border p-2 rounded-lg text-[#A5A5A5] text-sm"
                  >
                    {Array.from(
                      { length: 20 },
                      (_, index) => 1 + index * 0.5
                    ).map((hour) => (
                      <option key={hour} value={hour}>
                        {hour} hora(s)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="space" className="text-sm">
                    Espacio
                  </label>
                  <select
                    id="space"
                    name="spaceId"
                    defaultValue=""
                    className="border p-2 rounded-lg text-[#A5A5A5] text-sm"
                  >
                    {formData.spaces.map((space) => (
                      <option key={space.id} value={space.id}>
                        {space.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-5">
                <Button
                  icon={undefined}
                  title="Añadir Asignatura"
                  type="submit"
                  action={() => {}}
                />
              </div>
            </form>
          </div>
        </div>
      )}

      <Button
        icon={PLUS_ICON}
        title="Añadir Asignatura"
        type="button"
        action={() => setIsOpen(true)}
      />
    </div>
  );
}
