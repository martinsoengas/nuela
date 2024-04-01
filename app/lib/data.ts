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
    const RAWteacherSubjectInfo = await prisma.teacherSubject.findMany({
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

    const teacherSubjectInfo = RAWteacherSubjectInfo.map((item) => ({
      subject: item.Subject.name,
      subjectType: item.SubjectType.name,
      course: item.Course.level,
      group: item.Group.name,
      hours: item.hours,
      space: item.Space.name,
    }));

    return teacherSubjectInfo;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch teacher subjects.');
  }
}

export async function fetchHoursByTeacher(email: string) {
  noStore();

  try {
    const totalHours = await prisma.teacherSubject.aggregate({
      _sum: {
        hours: true,
      },
      where: {
        Teacher: {
          email: email,
        },
      },
    });

    return totalHours._sum.hours; // Esto retornará la suma total de horas o null si no hay datos
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch hours by teacher.');
  }
}
