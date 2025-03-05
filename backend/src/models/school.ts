// src/models/school.ts
import mongoose, { Model } from "mongoose";
import { ISchool } from "../types"; // Make sure ISchool is defined in your types file

// Mongoose schema definition
const schoolSchema = new mongoose.Schema<ISchool>({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber1: { type: String, required: true },
    phoneNumber2: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
    school: { type: String, required: true },
    role: { type: String, required: true, default: "admin"},
    status: { type: String, required: true, enum: ["active", "inactive"], default: "inactive" }, // Default value set
    paymentId: { type: String, required: true },
    username: { type: String, required: true, lowercase: true },
}, { timestamps: true }); // Adds createdAt and updatedAt automatically

// Create a Mongoose model based on the schema
const School: Model<ISchool> = mongoose.model<ISchool>("School", schoolSchema);

export default School;
