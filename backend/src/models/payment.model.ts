//src/models/payment.model.ts

import mongoose, { Model, Types } from "mongoose";
import { PaymentMode } from "../types/enums";
import { IPayment } from "../types";

// Schema for Payment Model
const paymentSchema= new mongoose.Schema(
  {
    school: { type: Types.ObjectId,required: true },
    invoiceNumber: { type: Types.ObjectId },
    feeName: { type: String, required: true },
    amountPaid: { type: Number, required: true },
    paymentMethod: { type: String, enum: Object.values(PaymentMode), required: true },
    paidBy: { type: String, required: true },
    paymentDate: { type: Date, required: true },
    student: { type: Types.ObjectId, required: true },
    bankDetails: {
      bankName: { type: String },
      bankAccountNumber: { type: String },
      bankBranch: { type: String },
      chequeNumber: { type: String },
    },
    mpesaDetails: {
      phoneNumber: { type: String },
      mpesaAccountNumber: { type: Number },
      mpesaTransactionId: { type: String },
      mpesaDateTransacted: { type: Date },
    },
    activity: { type: Types.ObjectId},
    tuitionFee: { type:Types.ObjectId},
    transport: { type:Types.ObjectId},
  },
    { timestamps: true }
  );

  const Payment: Model<IPayment> = mongoose.model<IPayment>("Payment", paymentSchema)

  export default {Payment}