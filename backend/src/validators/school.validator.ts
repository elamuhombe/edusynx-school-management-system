//src/validators/school.validator.ts
import { z } from 'zod';
import { RoleValidator } from './role.validator';


const SchoolValidator = z.object({
  _id: z.string().optional(),
  name: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  phoneNumber1: z.string().min(10), // Adjust phone number validation as needed
  phoneNumber2: z.string().min(10), // Adjust phone number validation as needed
  email: z.string().email(),
  password: z.string().min(6), // Adjust password strength as needed
  school: z.union([z.string(), z.lazy(() => SchoolValidator)]), // Recursive validation for school field
  role: RoleValidator,
  status: z.object({
    type: z.string().default('inactive'),
  }),
  paymentId: z.string(),
  username: z.string().min(1),
});

export type ISchool = z.infer<typeof SchoolValidator>;

export { SchoolValidator };
