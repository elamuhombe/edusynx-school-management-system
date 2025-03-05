//src/models/exam.model.ts

import mongoose, { Model } from "mongoose";
import { IExam } from "../types";

const examSchema = new mongoose.Schema({
    examName:{type: String, required: true},
    examDate:{type:Date},
    year:{type: Number}
})

const Exam: Model<IExam> = mongoose.model<IExam>("Exam", examSchema)

export default Exam