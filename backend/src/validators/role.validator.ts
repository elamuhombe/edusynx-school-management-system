// src/validators/roleValidator.ts
import { z } from 'zod';
import { Role } from '../types/enums';

const RoleValidator = z.nativeEnum(Role);

export { RoleValidator };
