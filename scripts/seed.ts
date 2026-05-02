import mongoose from "mongoose";
import dbConnect from "../lib/db";
import Student from "../models/Student";
import Teacher from "../models/Teacher";
import Class from "../models/Class";
import Fee from "../models/Fee";
import Activity from "../models/Activity";
import Alert from "../models/Alert";
import Announcement from "../models/Announcement";
import Attendance from "../models/Attendance";
import Mark from "../models/Mark";
import Staff from "../models/Staff";
import Inventory from "../models/Inventory";
import Book from "../models/Book";
import User from "../models/User";
import Parent from "../models/Parent";
import Section from "../models/Section";

const seedData = async () => {
  try {
    await dbConnect();

    // Clear existing data
    await Promise.all([
      Student.deleteMany({}),
      Teacher.deleteMany({}),
      Class.deleteMany({}),
      Fee.deleteMany({}),
      Activity.deleteMany({}),
      Alert.deleteMany({}),
      Announcement.deleteMany({}),
      Attendance.deleteMany({}),
      Mark.deleteMany({}),
      Staff.deleteMany({}),
      Inventory.deleteMany({}),
      Book.deleteMany({}),
      User.deleteMany({}),
      Parent.deleteMany({}),
      Section.deleteMany({}),
    ]);

    console.log("Cleared existing data.");

    // Create Teachers
    const teachers = await Teacher.insertMany([
      { name: "Dr. Kamrul Hasan", email: "kamrul@nub.edu.bd", teacherId: "TCH001", department: "CSE", status: "Active" },
      { name: "Fatima Zohra", email: "fatima@nub.edu.bd", teacherId: "TCH002", department: "EEE", status: "Active" },
      { name: "Prof. Ahmed Ali", email: "ahmed@nub.edu.bd", teacherId: "TCH003", department: "BBA", status: "Active" },
    ]);

    // Create Classes
    const classes = await Class.insertMany([
      { name: "Computer Science & Engineering", code: "CSE", teacherId: teachers[0]._id },
      { name: "Electrical & Electronic Engineering", code: "EEE", teacherId: teachers[1]._id },
      { name: "Business Administration", code: "BBA", teacherId: teachers[2]._id },
    ]);

    // Create Sections
    const sections = await Section.insertMany([
      { name: "Section A", sectionId: "SEC-01", classId: classes[0]._id, teacherId: teachers[0]._id, room: "L-401", capacity: 40 },
      { name: "Section B", sectionId: "SEC-02", classId: classes[0]._id, teacherId: teachers[1]._id, room: "L-402", capacity: 45 },
      { name: "Section A", sectionId: "SEC-03", classId: classes[1]._id, teacherId: teachers[1]._id, room: "E-101", capacity: 50 },
    ]);

    // Create Students
    const students = await Student.insertMany([
      { name: "Md Amin", email: "amin@nub.edu.bd", studentId: "STU001", classId: classes[0]._id, sectionId: sections[0]._id, status: "Active" },
      { name: "Sifat Rahman", email: "sifat@nub.edu.bd", studentId: "STU002", classId: classes[0]._id, sectionId: sections[1]._id, status: "Active" },
      { name: "Jarin Tasnim", email: "jarin@nub.edu.bd", studentId: "STU003", classId: classes[1]._id, sectionId: sections[2]._id, status: "Active" },
    ]);

    // Create Parents
    await Parent.insertMany([
      { name: "Md. Jamil Hossain", email: "jamil@gmail.com", phone: "01712345678", parentId: "PAR-1001", studentId: students[0]._id, status: "Active" },
      { name: "Mrs. Rabeya Begum", email: "rabeya@gmail.com", phone: "01812345678", parentId: "PAR-1002", studentId: students[1]._id, status: "Active" },
    ]);

    // Create Users
    await User.insertMany([
      { name: "Admin User", role: "Admin", email: "admin@nub.edu.bd", department: "IT", status: "Active" },
    ]);

    // Create Announcements
    await Announcement.insertMany([
      { title: "Final Exam Schedule Summer 2026", content: "The final exam schedule is now available.", category: "Academic", priority: "High", targetAudience: "Students" },
    ]);

    // Create Staff
    await Staff.insertMany([
      { name: "Rahim Uddin", email: "rahim@nub.edu.bd", staffId: "STF001", designation: "Accountant", department: "Accounts", status: "Active" },
    ]);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedData();
