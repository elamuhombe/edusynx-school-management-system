//src/models/tuition.model.ts

import mongoose, { Model, Types } from "mongoose"
import { ITuitionFee } from "../types"

const tuitionSchema = new mongoose.Schema<ITuitionFee>({
    school: {type: Types.ObjectId},
    feeName: {type: String, required: true},
    tuitionFeeAmount: {type: Number, required: true},
    grade: {type: String, required: true}

})

const Tuition: Model<ITuitionFee> = mongoose.model<ITuitionFee>("Tuition", tuitionSchema)
export default Tuition