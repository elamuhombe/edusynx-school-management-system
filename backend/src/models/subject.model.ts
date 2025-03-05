//src/models/subject.model.ts

import mongoose, { Model, Types } from "mongoose";
import { ISubject } from "../types/school";

const subjectSchema = new mongoose.Schema<ISubject>({
    subjectName: { type: String, required: true },
  department: { type: String, required: true },
  teacher: { 
    type: Types.ObjectId, 
    ref: 'User', 
    required: true
  }
});

const Subject: Model<ISubject> = mongoose.model<ISubject>("Subject", subjectSchema);

export default Subject;
