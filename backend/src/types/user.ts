//src/types/user.ts
import { Types } from "mongoose";
import { Gender, Role } from "./enums";
import { IClass, ISchool } from "./school";

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
  familyNumber?: number; // For guardians

  // For teachers
  className?: string | IClass;
  teaching_subjects?: string[];
  isClassTeacher?: boolean;
}
