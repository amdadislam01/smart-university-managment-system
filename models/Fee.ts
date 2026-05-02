import mongoose from "mongoose";

const FeeSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Paid", "Pending"], default: "Pending" },
    dueDate: { type: Date, required: true },
    paidDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.Fee || mongoose.model("Fee", FeeSchema);
