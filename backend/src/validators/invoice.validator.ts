//src/validators/invoice.validator.ts
import { Types } from "mongoose";
import { z } from "zod";
import { SchoolValidator } from "./school.validator";

const PaymentStatusEnum = z.enum(["paid", "pending", "overdue"]);
const PaymentModeEnum = z.enum(["cash", "credit_card", "bank_transfer"]); 

const FeesDetailsValidator = z.object({
  source: z.enum(["activity", "tuition", "transport"]),
  reference: z.any(),
});

export const InvoiceValidator = z.object({
  invoiceNumber: z.string().min(3, "Invoice number is required"),
  school: z.union([z.instanceof(Types.ObjectId), SchoolValidator]),
  payer: z.union([z.string(), z.any()]),
  totalAmount: z.number().positive("Total amount must be positive"),
  issueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD expected)"),
  dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD expected)"),
  paymentStatus: PaymentStatusEnum,
  paymentMethod: PaymentModeEnum.optional(),
  paymentDate:z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD expected)").optional(),
  feesDetails: z.array(FeesDetailsValidator).nonempty("At least one fee detail is required"),
});
