//src/validators/class.validator.ts
import { z } from "zod";
import { SchoolValidator } from "./school.validator"; // Assuming you have a schema for ISchool
import { Types } from "mongoose";

const ClassValidator = z.object({
 school: z.union([z.instanceof(Types.ObjectId), SchoolValidator]),
  className: z.string(), // Class name as a non-empty string
  year: z.number().int().min(1900).max(2100), // Year as a number within a reasonable range
});

export type IClass = z.infer<typeof ClassValidator>;

export { ClassValidator };
