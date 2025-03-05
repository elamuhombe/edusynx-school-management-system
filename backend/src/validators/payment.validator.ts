//src/validators/payment.validator.ts
import { z } from "zod";
import { IActivity, IInvoice, ITransport, ITuitionFee } from "../types";
import { SchoolValidator } from "./school.validator";
import { IStudent } from "./student.validator";
import { Types } from "mongoose";


const PaymentModeEnum = z.enum(["CASH", "BANK_TRANSFER", "M_PESA", "CHEQUE"]);

const PaymentValidator = z.object({
  school: z.union([z.instanceof(Types.ObjectId), SchoolValidator]),
  invoiceNumber: z.optional(z.union([z.string(), z.custom<IInvoice>()])),
  feeName: z.string().min(1, "Fee name is required"),
  amountPaid: z.number().positive("Amount paid must be positive"),
  paymentMethod: PaymentModeEnum,
  paidBy: z.string().min(1, "Paid by is required"),
  paymentDate: z.preprocess((arg) =>
    typeof arg === "string" || arg instanceof Date ? new Date(arg) : arg,
    z.date()
  ),
  student: z.union([z.string(), z.custom<IStudent>()]),
  bankDetails: z.optional(
    z.object({
      bankName: z.string().min(1, "Bank name is required"),
      bankAccountNumber: z.string().min(1, "Bank account number is required"),
      bankBranch: z.string().min(1, "Bank branch is required"),
      chequeNumber: z.string().min(1, "Cheque number is required"),
    })
  ),
  mpesaDetails: z.optional(
    z.object({
      phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
      mpesaAccountNumber: z.number().positive("MPesa account number must be positive"),
      mpesaTransactionId: z.string().min(1, "Transaction ID is required"),
      mpesaDateTransacted: z.preprocess((arg) =>
        typeof arg === "string" || arg instanceof Date ? new Date(arg) : arg,
        z.date()
      ),
    })
  ),
  activity: z.optional(z.custom<IActivity>()),
  tuitionFee: z.optional(z.custom<ITuitionFee>()),
  transport: z.optional(z.custom<ITransport>()),
});

export type IPayment = z.infer<typeof PaymentValidator>;
export{PaymentValidator}

