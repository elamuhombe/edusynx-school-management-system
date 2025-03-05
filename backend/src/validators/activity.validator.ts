//src/validators/activity.validator.ts

import { z } from "zod";
import { SchoolSchema } from "./school.validator";

const ActivitySchema = z.object({
    school: SchoolSchema,
    activityName: z.string(),
    activityFeeAmount: z.number(),
  });

  export type IActivity = z.infer<typeof ActivitySchema>;

export { ActivitySchema };