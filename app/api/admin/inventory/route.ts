import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Inventory from "@/models/Inventory";
import Activity from "@/models/Activity"; // Might not be fully matched to Inventory activities but we'll try

export async function GET() {
  try {
    await dbConnect();
    const inventory = await Inventory.find().sort({ createdAt: -1 });

    const stats = {
      totalAssets: inventory.length,
      lowStock: inventory.filter(item => item.quantity > 0 && item.quantity <= 10).length,
      maintenance: inventory.filter(item => item.status === "Under Maintenance").length,
      // Just a placeholder value since we don't have price field in Inventory model
      totalValue: "৳ 8.5M"
    };

    // Placeholder recent activities since we don't have an InventoryActivity model
    const recentActivities = [
      { action: "Issued", item: "Laptop (AST-001)", user: "Dr. Kamrul", date: new Date().toISOString() },
      { action: "Returned", item: "Projector (AST-084)", user: "Staff (Mitu)", date: new Date(Date.now() - 86400000).toISOString() },
    ];

    return NextResponse.json({
      success: true,
      data: {
        inventory,
        stats,
        recentActivities
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Status mapping if needed
    let status = "In Stock";
    if (body.quantity === 0) status = "Out of Stock";
    if (body.status) status = body.status;

    const newItem = await Inventory.create({
      itemName: body.itemName,
      category: body.category,
      quantity: Number(body.quantity) || 0,
      unit: body.unit || "Pcs",
      location: body.location || "",
      status
    });

    return NextResponse.json({ success: true, data: newItem });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
