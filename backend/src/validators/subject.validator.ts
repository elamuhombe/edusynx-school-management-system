//src/validators/subject.validator.ts
import { z } from 'zod';
import { Types } from 'mongoose';


// Define the Zod schema for ISubject
const SubjectValidator = z.object({
  subjectName: z.string(),
  department: z.string(),
  teacher: z.union([
    z.instanceof(Types.ObjectId),
    z.object({
      _id: z.instanceof(Types.ObjectId),
      firstName: z.string(),
      lastName: z.string(),
    }),
  ]),
});


export type ISubject= z.infer<typeof SubjectValidator>;

export {SubjectValidator}

