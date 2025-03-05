//src/models/student.model.ts

import mongoose, { Model, Types } from "mongoose";
import { IStudent } from "../types";
import { Gender } from "../types/enums";

const studentSchema = new mongoose.Schema<IStudent>({
    studentId:{type: String},
    school:{type:Types.ObjectId},
    studentFirstName:{type: String, required: true},
    studentMiddleName:{type: String, required: true},
    studentLastName:{type: String, required: true},
    gender: { type: String, enum: [Gender.BOY, Gender.GIRL], required: true },
    dateOfBirth:{type:Date, required: true},
    clas:{type:Types.ObjectId},
    previousSchool:{type: String},
    adm:{type: Number},
    guardian:{type: Types.ObjectId},
    exam:{type: Types.ObjectId},
    activity:{type: Types.ObjectId},
    transport:{type: Types.ObjectId}

})

const Student: Model<IStudent> = new mongoose.Model("Student", studentSchema)

export {Student}