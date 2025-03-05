//src/models/transport.model.ts

import mongoose, { Model, Types } from "mongoose"
import { ITransport } from "../types"

const transportSchema = new mongoose.Schema<ITransport>({
    school:{type: Types.ObjectId},
    routeName:{type: String, required: true},
    routeCharges:{type: Number, required: true}
})

const Transport: Model<ITransport> = mongoose.model<ITransport>("Transport", transportSchema)
export default Transport