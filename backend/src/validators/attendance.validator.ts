//src/validators/attendance.validator.ts
import { z } from "zod";
import { ClassValidator} from "./class.validator";
import { StudentAttendanceValidator } from "./studentAttendance.validator";

const AttendanceValidator = z.object({
  class: ClassValidator, // Zod validation for IClass
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD expected)"),
  studentAttendances: z.array(StudentAttendanceValidator), // Zod validation for array of IStudentAttendance
});

export type IAttendance = z.infer<typeof AttendanceValidator>;

export { AttendanceValidator };
