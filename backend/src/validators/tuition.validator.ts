//src/validatoes/tuition.validator.ts
import { z } from "zod";
import { SchoolSchema } from "./school.validator";


export const tuitionFeeSchema = z.object({
    school: SchoolSchema,
    feeName: z.string(),
    tuitionFeeAmount: z.number(),
    grade: z.string(),
  });
  
  // Type inference for ITuitionFee from the schema
  export type TuitionFee = z.infer<typeof tuitionFeeSchema>;