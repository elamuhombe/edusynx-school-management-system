//src/models/attendance.model.ts

import mongoose, { Model, Types } from "mongoose";
import { IAttendance } from "../types/school";

const attendanceSchema = new mongoose.Schema<IAttendance>({
    class:{type: Types.ObjectId, required: true},
    date:{type: Date, required: true},
    studentAttendances: [{ // Array containing individual student attendance data
        studentName: {
            type: String, // Store the student's name as a string
            ref: "Student", // Reference to the Student model
            required: true //
          },
        isPresent: { type: Boolean, required: true } 
    }]
})

const Attendance: Model<IAttendance> = new mongoose.Model("Attendance", attendanceSchema)

export default Attendance