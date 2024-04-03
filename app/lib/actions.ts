'use server';

import z from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const FormSchema = z.object({
  hours: z.coerce.number(),
  subjectId: z.coerce.number(),
  subjectTypeId: z.coerce.number(),
  courseId: z.coerce.number(),
  groupId: z.coerce.number(),
  teacherId: z.coerce.number(),
  spaceId: z.coerce.number(),
});

export async function createTeacherSubject(
  prevState: boolean,
  formData: FormData
) {
  const {
    hours,
    subjectId,
    subjectTypeId,
    courseId,
    groupId,
    teacherId,
    spaceId,
  } = FormSchema.parse({
    hours: formData.get('hours'),
    subjectId: formData.get('subjectId'),
    subjectTypeId: formData.get('subjectTypeId'),
    courseId: formData.get('courseId'),
    groupId: formData.get('groupId'),
    teacherId: formData.get('teacherId'),
    spaceId: formData.get('spaceId'),
  });

  try {
    await prisma.teacherSubject.create({
      data: {
        hours,
        subjectId,
        subjectTypeId,
        courseId,
        groupId,
        teacherId,
        spaceId,
      },
    });

    revalidatePath('/');

    return true;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to creat subject for teacher');
  }
}
