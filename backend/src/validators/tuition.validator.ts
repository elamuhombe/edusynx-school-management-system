//src/validatoes/tuition.validator.ts
import { z } from "zod";
import { SchoolValidator } from "./school.validator";
import { Types } from "mongoose";

const TuitionFeeValidator = z.object({
   school: z.union([z.instanceof(Types.ObjectId), SchoolValidator]),
    feeName: z.string(),
    tuitionFeeAmount: z.number(),
    grade: z.string(),
  });
  
  // Type inference for ITuitionFee from the schema
  export type TuitionFee = z.infer<typeof TuitionFeeValidator>;
  export {TuitionFeeValidator}
  