//src/validators/attendance.validator.ts
import { z } from "zod";
import { ClassValidator} from "./class.validator";
import { StudentAttendanceValidator } from "./studentAttendance.validator";

const AttendanceValidator = z.object({
  class: ClassValidator, // Zod validation for IClass
  date: z.date(), // Zod validation for Date
  studentAttendances: z.array(StudentAttendanceValidator), // Zod validation for array of IStudentAttendance
});

export type IAttendance = z.infer<typeof AttendanceValidator>;

export { AttendanceValidator };
