//src/validators/student.validator.ts
import { z } from "zod";
import { SchoolValidator} from "./school.validator";
import { ClassValidator} from "./class.validator";
import { ActivityValidator } from "./activity.validator";
import { userValidator } from "./user.validator";
import { Types } from "mongoose";
import { transportValidator } from "./transport.validator";
import { ExamValidator } from "./exam.validator";
import { Gender } from "../types/enums";



const StudentValidator = z.object({
  studentId: z.string().optional(), // studentId is optional, so we use .optional()
  school: z.union([z.instanceof(Types.ObjectId), SchoolValidator]),
  studentFirstName: z.string().min(1, "First name is required"), //
  studentMiddleName: z.string().min(1, "Middle name is required"),
  studentLastName: z.string().min(1, "Last name is required"),
  gender: z.enum([Gender.BOY,Gender.GIRL]),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD expected)"),
  clas: z.union([z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"), ClassValidator]), // clas is either ObjectId or IClass
  previousSchool: z.string(), // previousSchool is a string
  adm: z.number().int().positive(), // adm is a positive integer
  guardian: z.union([z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"), userValidator]), // guardian is either ObjectId or IUser
  exam: z.union([z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"), ExamValidator]), // exam is either ObjectId or IExam
  activity: z.union([z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"), ActivityValidator]).optional(), // activity is optional and can be an ObjectId or IActivity
  transport: z.union([z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"), transportValidator]).optional(), // transport is optional and can be an ObjectId or ITransport
});



export type IStudent = z.infer<typeof StudentValidator>;
export {StudentValidator}
