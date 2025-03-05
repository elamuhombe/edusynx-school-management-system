//src/models/activity.model.ts

import mongoose, { Model, Types } from "mongoose"
import { IActivity } from "../types"

const activitySchema = new mongoose.Schema<IActivity>({
    school:{type: Types.ObjectId},
    activityName:{type: String, required: true},
    activityFeeAmount:{type: Number, required: true}

})

const Activity: Model<IActivity> = mongoose.model<IActivity>("Activity", activitySchema)

export default Activity