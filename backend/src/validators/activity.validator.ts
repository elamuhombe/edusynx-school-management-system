//src/validators/activity.validator.ts

import { z } from "zod";
import { SchoolValidator } from "./school.validator";
import { ISchool } from "../types";
import { Types } from "mongoose";

const ActivityValidator = z.object({
    school: z.union([z.instanceof(Types.ObjectId), SchoolValidator]),
    activityName: z.string(),
    activityFeeAmount: z.number(),
  });

  export type IActivity = z.infer<typeof ActivityValidator>;
export{ActivityValidator}