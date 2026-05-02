import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema(
  {
    itemName: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, default: "pcs" },
    location: { type: String },
    status: { type: String, enum: ["In Stock", "Out of Stock", "Under Maintenance"], default: "In Stock" },
  },
  { timestamps: true }
);

export default mongoose.models.Inventory || mongoose.model("Inventory", InventorySchema);
