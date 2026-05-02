import mongoose from "mongoose";

const MarkSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
    examType: { type: String, enum: ["Midterm", "Final", "Quiz", "Assignment"], required: true },
    obtainedMarks: { type: Number, required: true },
    totalMarks: { type: Number, required: true },
    grade: { type: String },
    remarks: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Mark || mongoose.model("Mark", MarkSchema);
