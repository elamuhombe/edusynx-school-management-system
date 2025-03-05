//src/types/payment.ts

import { PaymentMode } from "./enums";
import { ISchool, ITransport, ITuitionFee, IActivity } from "./school";
import { IUser } from "./user";
import { IStudent } from "./student";

export interface IPayment {
  school: string | ISchool;
  invoiceNumber?: string | IInvoice;
  feeName: string;
  amountPaid: number;
  paymentMethod: PaymentMode;
  paidBy: string;
  paymentDate: Date;
  student: string | IStudent;
  bankDetails?: {
    bankName: string;
    bankAccountNumber: string;
    bankBranch: string;
    chequeNumber: string;
  };
  mpesaDetails?: {
    phoneNumber: string;
    mpesaAccountNumber: number;
    mpesaTransactionId: string;
    mpesaDateTransacted: Date;
  };
  // Reference to the fee being paid for
  activity?: IActivity;
  tuitionFee?: ITuitionFee;
  transport?: ITransport;
}

export interface IInvoice {
  invoiceNumber: string;
  school: string | ISchool;
  payer: string | IUser;
  totalAmount: number;
  issueDate: Date;
  dueDate: Date;
  paymentStatus: "paid" | "pending" | "overdue";
  paymentMethod?: PaymentMode;
  paymentDate?: Date;
  feesDetails: {
    source: "activity" | "tuition | transport"; // Indicates the type of fee
    reference: IActivity | ITuitionFee | ITransport; // Stores the actual fee
  }[];
}
