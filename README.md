# 🎓 Smart University Management System (SUMS)



[![Next.js](https://img.shields.io/badge/Next.js-15+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A comprehensive, modern, and highly scalable **University Management System** designed to streamline academic, administrative, and financial operations.Built with a premium UI/UX experience and robust backend architecture.

---

## 🚀 Key Features (Implemented)

### 👨‍💼 Admin Powerhouse
*   **Dynamic Dashboard**: Real-time stats for students, teachers, and staff.
*   **Academic Control**: Full CRUD for Classes, Courses, Sections, and Routines.
*   **Attendance Hub**: Advanced attendance policies, holiday management, and automated reporting.
*   **Marks & Transcripts**: Batch marks upload, dynamic transcript generation, and report card management.
*   **User Management**: Secure role-based management for Teachers, Staff, Students, and Parents.
*   **Announcements**: Global announcement system with category-based filtering.

### 👨‍🎓 Student Portal
*   **Personal Dashboard**: Overview of attendance, results, and upcoming routines.
*   **Academic Tracking**: View routines, course materials, and detailed results.
*   **Financial Tracking**: Manage fees, view invoices, and track payment history.
*   **Profile Management**: Update personal info and view academic progress.
*   **Digital Library & Downloads**: Access to university resources and official documents.

### 💰 Financial Management
*   **Invoice Generation**: Automated invoicing for tuition and other fees.
*   **Payment Integration**: Tracking payments, waivers, and fines.
*   **Financial Reports**: Comprehensive reports for administrative audit.

### 🏫 Administration & Research
*   **Office Portals**: Dedicated sections for VC, Registrar, Deans, and Chairmen.
*   **Admission System**: Comprehensive modules for Undergraduate to PhD admissions.
*   **Research Hub**: Management of journals, publications, and funded projects.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 15+](https://nextjs.org/), [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/) (for animations)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

---

## 📂 Project Structure

```text
smart-university-management-system/
├── 📁 app/                     # Next.js App Router (Main Application Logic)
│   ├── 📁 admin/               # Admin Portal (Dashboard, Academic, Attendance, Financial)
│   │   ├── 📁 academic/        # Courses, Routines, Sections management
│   │   ├── 📁 attendance/      # Attendance policies & records
│   │   └── 📁 marks/           # Transcripts, Uploads, Grades
│   ├── 📁 api/                 # Backend API Routes (Server-side logic)
│   │   └── 📁 admin/           # Admin specialized endpoints
│   ├── 📁 (auth)/              # Authentication & Authorization routes
│   ├── 📁 student/             # Student Dashboard (Attendance, Results, Routine)
│   ├── 📁 admission/           # Admission procedures (Undergrad, Grad, PhD)
│   ├── 📁 research/            # Academic research, journals & publications
│   ├── 📄 layout.tsx           # Root application layout
│   └── 📄 page.tsx             # Homepage / Landing page
├── 📁 components/              # Reusable React Components
│   ├── 📁 dashboard/           # Sidebar, Navbar, Layouts for Dashboards
│   └── 📁 ui/                  # Atomic components (Hero, Footer, Navbar, Sections)
├── 📁 models/                  # Mongoose Schemas (Database Models)
│   ├── 📄 Student.ts           # Student data structure
│   ├── 📄 Teacher.ts           # Teacher data structure
│   ├── 📄 Course.ts            # Course data structure
│   └── 📄 User.ts              # Authentication user schema
├── 📁 lib/                     # Utilities & Configurations
│   ├── 📄 db.ts                # MongoDB connection & configuration
│   └── 📄 utils.ts             # Global utility functions (cn, etc.)
├── 📁 public/                  # Static Assets & Media
│   ├── 📁 news/                # Dynamic news & event images
│   └── 📁 students/            # Student-related banners & assets
├── 📄 middleware.ts            # Route protection & Security middleware
├── 📄 next.config.ts           # Next.js Framework configuration
├── 📄 tsconfig.json            # TypeScript configuration
└── 📄 package.json             # Project dependencies & Scripts
```

---

## 🔌 API Endpoints (Core)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/admin/stats` | Get overview stats for dashboard |
| **POST** | `/api/admin/students` | Register a new student |
| **GET** | `/api/admin/attendance/reports` | Fetch attendance reports |
| **POST** | `/api/admin/marks/upload` | Batch upload student marks |
| **GET** | `/api/admin/marks/transcript/[stuId]` | Generate student transcript |
| **POST** | `/api/admin/announcements` | Create new university announcement |
| **GET** | `/api/admin/routines` | Fetch academic routines |
| **PUT** | `/api/admin/courses/[id]` | Update course details |

---

## 🔮 Upcoming Features (Roadmap)

- [ ] **Real-time Notifications**: WebSocket integration for instant alerts.
- [ ] **LMS Integration**: Full Learning Management System with assignment submissions.
- [ ] **Mobile App**: Cross-platform mobile application for Students and Teachers.
- [ ] **Alumni Portal**: Networking platform for graduated students.
- [ ] **Online Examination**: Secure portal for conducting online quizzes and exams.
- [ ] **AI Chatbot**: Intelligent assistant for student queries.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 20+
- MongoDB instance (Local or Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/smart-university-management-system.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env.local`:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```


---
Developed with ❤️ by **MD Amdad Islam**
