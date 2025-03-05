//src/types/school.ts

import { Types } from "mongoose";
import { Role } from "./enums";

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

  export interface ITransport{
    school: Types.ObjectId | ISchool;
    routeName: string;
    routeCharges: number;
  }
  
