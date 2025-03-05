//src/types/school.ts

import { Types } from "mongoose";
import { Role } from "./enums";
import { IUser } from "./user";
import { IStudentAttendance } from "./student";

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
  status: { type: String; default: "inactive" };
  paymentId: String;
  username: String ;
}

export interface IActivity {
  school: string | ISchool;
  activityName: string;
  activityFeeAmount: Number;
}

export interface ITuitionFee {
  school: string | ISchool;
  feeName: string;
  tuitionFeeAmount: number;
  grade: string;
}

export interface ISubject{
  subject_name: string;
  department: string;
  teacher: Types.ObjectId | IUser;
}

export interface IExam {
    exam_name: string;
    exam_date: string;
    term: string;
  }
  export  interface IClass {
    school: Types.ObjectId | ISchool;
    className: string;
    year: number;
  }

  export interface IAttendance{
    class: IClass;
    date: Date;
    studentAttendances: IStudentAttendance[]
  }

  export interface ITransport{
    school: Types.ObjectId | ISchool;
    routeName: string;
    routeCharges: number;
  }
  
