export type Teacher = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export type Subject = {
  id: number;
  name: string;
};

export type SubjectType = {
  id: number;
  name: string;
};

export type Course = {
  id: number;
  level: string;
};

export type Group = {
  id: number;
  name: string;
};

export type Space = {
  id: number;
  name: string;
};

export type allData = {
  subjects: Subject[];
  subjectTypes: SubjectType[];
  courses: Course[];
  groups: Group[];
  spaces: Space[];
};
