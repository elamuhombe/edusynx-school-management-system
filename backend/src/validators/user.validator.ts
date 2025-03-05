//src/validators/user.validator.ts
import { z } from "zod";
import { Types } from "mongoose";
import { Gender, Role } from "../types/enums";
import { SchoolValidator } from "./school.validator";


// Define the Zod validator for the IUser interface
const userValidator = z.object({
  school: z.union([z.instanceof(Types.ObjectId), SchoolValidator]),
  firstName: z.string().min(3, "First name is required"),
  lastName: z.string().min(3, "Last name is required"),
  email: z.string().email("Invalid email format"),
  phoneNumber1: z.string().min(10, "Phone number 1 must be at least 10 characters"),
  phoneNumber2: z.string().min(10, "Phone number 2 must be at least 10 characters"),
  primaryEmail: z.string().email("Invalid email format"),
  secondaryEmail: z.string().email("Invalid email format"),
  gender: z.enum([Gender.MALE, Gender.FEMALE]),
  role: z.enum([Role.ADMIN,Role.ACCOUNTANT, Role.GUARDIAN, Role.HEADTEACHER, Role.SCHOOLADMIN, Role.TEACHER]),
  password: z.string().optional(), // Optional but validates if provided
  familyNumber: z.number().optional(),
  
  // Teacher-specific fields
  className: z.union([z.string(), z.object({ /* validation for IClass */ })]).optional(), // Placeholder for IClass validation if needed
  teaching_subjects: z.array(z.string()).optional(),
  isClassTeacher: z.boolean().optional(),
});

export { userValidator };
