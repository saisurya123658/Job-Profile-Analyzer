# 🚀 AI Job Preparation Platform

<div align="center">

# 🤖 Full Stack Gen AI Resume Analyzer & Interview Preparation Platform

An AI-powered full-stack web application that helps job seekers analyze resumes, compare them with job descriptions, identify missing skills, generate interview questions, and create ATS-optimized resumes.

Built using modern web technologies and Generative AI to simulate a real-world recruitment preparation platform.

![React](https://img.shields.io/badge/Frontend-React.js-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express.js-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen?style=for-the-badge&logo=mongodb)
![Gemini AI](https://img.shields.io/badge/AI-Gemini-4285F4?style=for-the-badge)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge)
![Puppeteer](https://img.shields.io/badge/PDF-Puppeteer-brightgreen?style=for-the-badge)

</div>

---

# 🌟 Project Overview

AI Job Preparation Platform is an intelligent career assistant that enables users to prepare for technical interviews using Generative AI.

The platform analyzes resumes against job descriptions, identifies missing technical skills, generates personalized interview questions, provides preparation strategies, and creates ATS-friendly resumes in PDF format.

It combines modern full-stack development with AI-powered automation to simplify interview preparation.

---

# ✨ Features

## 👤 Authentication

- ✅ User Registration
- ✅ Secure Login
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Logout
- ✅ Token Blacklisting
- ✅ User Profile

---

## 🤖 AI Resume Analysis

- Upload Resume (PDF)
- Upload Job Description
- AI Resume Parsing
- Technical Skill Extraction
- Missing Skill Detection
- Resume Score
- ATS Compatibility Analysis

---

## 🎯 Interview Preparation

- AI-generated Interview Questions
- Technical Questions
- HR Questions
- Project-Based Questions
- Company-Specific Preparation
- Personalized Preparation Strategy

---

## 📄 Resume Generator

- ATS-Optimized Resume
- AI Resume Enhancement
- Professional Resume Formatting
- Dynamic PDF Generation
- Download Resume

---

## 📊 Dashboard

- Recent Interview Reports
- Resume Analysis History
- Interview Preparation Reports
- Download Generated Resume
- Report Management

---

# 🧠 AI Workflow

```text
Upload Resume
        ↓
Upload Job Description
        ↓
Resume Parsing
        ↓
Skill Extraction
        ↓
AI Skill Gap Detection
        ↓
Interview Question Generation
        ↓
Preparation Strategy
        ↓
ATS Resume Generation
        ↓
PDF Download
```

---

# 🏗️ System Architecture

The project follows a scalable layered architecture.

```text
React Frontend
        ↓
REST APIs
        ↓
Express Backend
        ↓
JWT Authentication
        ↓
Gemini AI
        ↓
MongoDB Database
```

---

# 🛠️ Technology Stack

## 🌐 Frontend

- React.js
- React Router
- Context API
- Axios
- CSS / Tailwind CSS

---

## ⚙️ Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- Zod Validation
- Cookie Parser
- CORS

---

## 🤖 Artificial Intelligence

- Google Gemini API

Used for:

- Resume Analysis
- Skill Extraction
- Interview Question Generation
- ATS Resume Generation
- Preparation Strategy

---

## 🗄️ Database

- MongoDB Atlas
- Mongoose ODM

---

## 📄 PDF Generation

- Puppeteer

---

# 📂 Project Structure

```bash
AI-Job-Preparation/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# 🔐 Authentication Flow

The platform implements secure JWT authentication.

Features include:

- User Registration
- Login
- Protected APIs
- Secure Cookies
- Logout
- JWT Verification
- Token Blacklisting

---

# 🤖 AI Features

The application uses Gemini AI for:

## Resume Parsing

- Extract skills
- Detect technologies
- Identify experience

---

## Skill Gap Analysis

Compare:

Resume

VS

Job Description

Generate:

- Missing Skills
- Improvement Suggestions
- Learning Roadmap

---

## Interview Preparation

Generate:

- Technical Questions
- Behavioral Questions
- HR Questions
- Resume-Based Questions
- Project-Based Questions

---

## ATS Resume Generator

Generate:

- ATS Friendly Resume
- Improved Resume Summary
- Enhanced Skills Section
- Optimized Experience
- Downloadable PDF

---

# 📄 Resume PDF Pipeline

```text
AI Resume
      ↓
Structured JSON
      ↓
HTML Template
      ↓
Puppeteer
      ↓
Professional PDF
```

---

# 📡 REST APIs

## Authentication

```http
POST /api/auth/register
```

```http
POST /api/auth/login
```

```http
POST /api/auth/logout
```

```http
GET /api/auth/me
```

---

## Interview APIs

```http
POST /api/interview/generate
```

```http
GET /api/interview/reports
```

```http
GET /api/interview/:id
```

---

## Resume APIs

```http
POST /api/resume/pdf
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/yourusername/ai-job-preparation.git
```

---

## Backend Setup

```bash
cd backend
```

```bash
npm install
```

Create `.env`

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_secret

GEMINI_API_KEY=your_gemini_api_key
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
```

```bash
npm install
```

Run application

```bash
npm run dev
```

---

# 📸 Screenshots

## 🏠 Dashboard

(Add screenshot here)

---

## 📄 Resume Analysis

(Add screenshot here)

---

## 🤖 Interview Questions

(Add screenshot here)

---

## 📑 ATS Resume Generator

(Add screenshot here)

---

# 🔒 Security Features

- JWT Authentication
- Password Encryption
- Token Blacklisting
- Protected Routes
- Input Validation
- Zod Schema Validation
- Secure Cookies
- File Upload Validation

---

# 🧪 Testing

## Tested Features

- Authentication
- Resume Upload
- Resume Parsing
- AI Report Generation
- Interview Question Generation
- Resume PDF Generation
- Protected APIs

---

# 🚀 Future Enhancements

- Voice Mock Interviews
- AI Interview Simulator
- Resume Versioning
- Company-Specific Interview Kits
- LinkedIn Profile Analysis
- Cover Letter Generator
- AI Career Roadmaps
- Multi-Language Support

---

# 📜 License

This project is developed for:

- Educational purposes
- AI experimentation
- Full Stack Development
- Interview Preparation

---

# ❤️ Credits

Built using:

- React.js
- Node.js
- Express.js
- MongoDB
- Gemini AI
- JWT
- Puppeteer
- Zod
- Axios

---

# 👨‍💻 Developer

```text
Surya
Full Stack Developer | MERN Stack Developer | AI Enthusiast
```

---

# 🤝 Contributing

Contributions are welcome!

## Steps

```bash
Fork → Clone → Create Branch → Commit → Push → Pull Request
```

---

# ⭐ Support

If you like this project, please ⭐ the repository!

---

<div align="center">

# 🚀 AI-Powered Career Preparation Platform

### Learn Smarter • Prepare Better • Get Hired Faster

⭐ Built with Full Stack Development + Generative AI

</div>
