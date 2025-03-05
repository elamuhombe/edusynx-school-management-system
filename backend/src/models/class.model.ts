//src/models/class.model.ts

import mongoose, { Model, Types } from "mongoose";
import { IClass } from "../types";

const classSchema = new mongoose.Schema<IClass>({
    school: {type:Types.ObjectId},
    className: {type: String, required: true},
    year: {type: Number, required: true}
})

const Class: Model<IClass>=mongoose.model("Class", classSchema)

export default Class