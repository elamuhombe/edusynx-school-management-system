//src/types/index.ts

import { Types } from "mongoose";

export enum Gender {
  BOY = "boy",
  GIRL = "girl",
  MALE = "male",
  FEMALE = "female",
}
export enum Role{
    ADMIN = "admin",
    HEADTEACHER = "headTeacher",
    SCHOOLADMIN = "schoolAdmin",
    ACCOUNTANT = "accountant",
    GUARDIAN = "guardian"
}

export interface ISchool {
  _id?: string;
  name: string;
  address: string;
  city: string;
  phoneNumber1: string;
  phoneNumber2: string;
  email: string;
  password: string;
  school: string | ISchool;
  role: Role;
  status: { type: String; default: "inactive" }; // Default status is inactive
  paymentId: String; // New field for payment ID
  username: String; // New field for username associated with the payment
}

export interface IClass {
  school: Types.ObjectId | ISchool;
  className: string;
  year: number;
}

export interface ISubject {
  subject_name: string;
  department: string;
  teacher: Types.ObjectId | IUser;
}

export interface IExam {
  exam_name: string;
  exam_date: string;
  term: string;
}

export interface IUser {
  school: Types.ObjectId | ISchool;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber1: string;
  phoneNumber2: string;
  email1: string;
  email2: string;
  gender: Gender;
  role: Role;
  password?: string;

  // for guardians
  familyNumber: number;

  // for teachers
  className: string | IClass;
  subject_name: string; // optional reference to the subject the teacher teaches
  teaching_subjects?: string[];
  isClassTeacher?: boolean;
}

export interface IStudent {
  studentId?: string;
  school: string | ISchool;
  student: string | IStudent;
  studentFirstName: string;
  studentMiddleName: string;
  studentLastName: string;
  gender: Gender;
  dateOfBirth: Date;
  clas: Types.ObjectId | IClass;
  previousSchool: string;
  adm: number;
  guardian: Types.ObjectId | IUser;
  exam: Types.ObjectId | IExam;
}
