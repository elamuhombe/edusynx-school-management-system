//src/validators/studentAttendance.validator.ts
import { z } from "zod";
import { StudentValidator } from "./student.validator";

const StudentAttendanceValidator = z.object({
  student: z.union([z.string().min(1, "Student ID is required"), StudentValidator]), // Validate either student ID or IStudent object
  isPresent: z.boolean(), // isPresent as a boolean
});

export type IStudentAttendance = z.infer<typeof StudentAttendanceValidator>;

export { StudentAttendanceValidator };
