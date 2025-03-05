// src/types/student.ts
import { Types } from "mongoose";
import { IClass, IExam, ISchool, ITransport, IActivity } from "./school";
import { IUser } from "./user";
import { Gender } from "./enums";

export interface IStudent {
  studentId?: string;
  school: string | ISchool;
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
  activity?: Types.ObjectId | IActivity;
  transport?: Types.ObjectId | ITransport
}

export interface IStudentAttendance{
  student: string | IStudent;
  isPresent: boolean;
}


