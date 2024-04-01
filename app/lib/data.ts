import { unstable_noStore as noStore } from 'next/cache';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function fetchTeacherProfile(email: string) {
  noStore();

  try {
    const teacherInfo = await prisma.teacher.findMany({
      where: {
        email: email,
      },
      select: {
        name: true,
        email: true,
        phone: true,
      },
    });

    return teacherInfo;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch teacher profile');
  }
}

export async function fetchTeacherSubjects(email: string) {
  noStore();

  try {
    const teacherSubjectInfo = await prisma.teacherSubject.findMany({
      where: {
        Teacher: {
          email: email,
        },
      },
      select: {
        Subject: {
          select: {
            name: true,
          },
        },
        SubjectType: {
          select: {
            name: true,
          },
        },
        Course: {
          select: {
            level: true,
          },
        },
        Group: {
          select: {
            name: true,
          },
        },
        hours: true,
        Space: {
          select: {
            name: true,
          },
        },
      },
    });

    return teacherSubjectInfo;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch teacher subjects.');
  }
}
