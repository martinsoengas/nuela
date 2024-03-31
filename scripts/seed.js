const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedDatabase() {
  // Crear profesor
  const teacher = await prisma.teacher.create({
    data: {
      name: 'Marta Martínez',
      email: 'profesora123@colegio.com',
      phone: '+34 666 555 444',
    },
  });

  // Crear espacios
  const space1A = await prisma.space.create({
    data: {
      name: '1º Bach - Grupo A',
    },
  });

  const space1B = await prisma.space.create({
    data: {
      name: '1º Bach - Grupo B',
    },
  });

  const space2C = await prisma.space.create({
    data: {
      name: '2º Bach - Grupo C',
    },
  });

  const lab = await prisma.space.create({
    data: {
      name: 'Laboratorio',
    },
  });

  // Crear tipos de asignatura
  const mandatoryType = await prisma.subjectType.create({
    data: {
      name: 'Obligatoria',
    },
  });

  const optionalType = await prisma.subjectType.create({
    data: {
      name: 'Optativa',
    },
  });

  // Crear cursos
  const course1 = await prisma.course.create({
    data: {
      level: '1º Bachillerato',
    },
  });

  const course2 = await prisma.course.create({
    data: {
      level: '2º Bachillerato',
    },
  });

  const course4ESO = await prisma.course.create({
    data: {
      level: '4º ESO',
    },
  });

  // Crear grupos
  const groupA = await prisma.group.create({
    data: {
      name: 'A',
    },
  });

  const groupB = await prisma.group.create({
    data: {
      name: 'B',
    },
  });

  const groupC = await prisma.group.create({
    data: {
      name: 'C',
    },
  });

  // Crear asignaturas
  const mathSubject = await prisma.subject.create({
    data: {
      name: 'Matemáticas',
    },
  });

  const physicsSubject = await prisma.subject.create({
    data: {
      name: 'Física y Química',
    },
  });

  const frenchSubject = await prisma.subject.create({
    data: {
      name: 'Francés',
    },
  });

  // Asignar asignaturas al profesor
  await prisma.teacherSubject.createMany({
    data: [
      {
        hours: 5,
        subjectId: mathSubject.id,
        subjectTypeId: mandatoryType.id,
        courseId: course1.id,
        groupId: groupB.id,
        teacherId: teacher.id,
        spaceId: space1B.id,
      },
      {
        hours: 5,
        subjectId: mathSubject.id,
        subjectTypeId: mandatoryType.id,
        courseId: course2.id,
        groupId: groupC.id,
        teacherId: teacher.id,
        spaceId: space2C.id,
      },
      {
        hours: 5,
        subjectId: physicsSubject.id,
        subjectTypeId: mandatoryType.id,
        courseId: course4ESO.id,
        groupId: groupA.id,
        teacherId: teacher.id,
        spaceId: lab.id,
      },
      {
        hours: 3,
        subjectId: frenchSubject.id,
        subjectTypeId: optionalType.id,
        courseId: course1.id,
        groupId: groupA.id,
        teacherId: teacher.id,
        spaceId: space1A.id,
      },
    ],
  });

  console.log('Database seeded!');
}

seedDatabase()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
