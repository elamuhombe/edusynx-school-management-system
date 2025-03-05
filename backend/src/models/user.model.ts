//src/models/user.model.ts

import mongoose, { Model, Types } from "mongoose";
import { IUser } from "../types";
import { Gender, Role } from "../types/enums";

const userSchema = new mongoose.Schema<IUser>({
    school: {type: Types.ObjectId},
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    phoneNumber1:{type: String, required: true},
    phoneNumber2:{type: String},
    primaryEmail:{type: String, required: true, lowercase: true},
    secondaryEmail:{type: String, required: true, lowercase: true},
    gender:{enum: [Gender.MALE, Gender.FEMALE], // Restrict to male or female
    role: {type: String,enum: Object.values(Role),required: true,},
    password: {type: String},
    familyNumber: {type: Number},
    className:{type: Types.ObjectId},
    teaching_subjects: {type: [String]},
    isClassTeacher: {type: Boolean}}
    },
    {
      timestamps: true,
    }
  );


const User: Model<IUser> = mongoose.model<IUser>("User", userSchema)

export default User