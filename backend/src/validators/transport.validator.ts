//src/validators/transport.validator.ts
import { z } from "zod";
import { Types } from "mongoose";
import { SchoolValidator } from "./school.validator";


const TransportValidator = z.object({
  school: z.union([z.instanceof(Types.ObjectId), SchoolValidator]),
  routeName: z.string().min(1, "Route name is required"),
  routeCharges: z.number().positive("Route charges must be a non-negative number"),
});

export type ITransport = z.infer<typeof TransportValidator>;
export { TransportValidator };
