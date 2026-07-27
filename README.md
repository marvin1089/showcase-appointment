# 🚀 Showcase Appointment

A full-stack showcase application demonstrating modern web development using Angular, Spring Boot, PostgreSQL and Docker.

The project was created as a personal portfolio to deepen practical software engineering skills and demonstrate modern full-stack application development.

The angular frontend is the first section of the online udemy-course "Complete Angular Course 2025 - Master Angular in only 6 days"

Link (for replicating): https://www.udemy.com/course/complete-angular-14-course-learn-frontend-development/learn/lecture/39162312#overview

---

## 🏗️ Architecture

The application follows a layered full-stack architecture:

```text
Browser
   │
Angular Frontend
   │ REST API
Spring Boot Backend
   │
PostgreSQL Database
```

The complete architecture documentation is available in the `docs` folder.

---

## ⚙️ Technology Stack

| Technology | Purpose |
|------------|---------|
| Angular | Frontend |
| Spring Boot | Backend REST API |
| Java | Backend Development |
| PostgreSQL | Database |
| Docker | Containerization |
| Maven | Dependency Management |
| Git | Version Control |

## ✨ Features

Current implementation:

- Angular frontend application
- Spring Boot REST API
- PostgreSQL database integration
- Docker Compose environment
- Layered backend architecture
- Git version control
- Architecture and project documentation

Planned extensions:

- Persistent appointment management
- CRUD operations
- Input validation
- Exception handling
- Unit and integration tests
- Authentication & authorization
- CI/CD pipeline


---

## 📁 Project Structure

showcase-appointment/
│
├── backend/
├── database/
├── docs/
├── src/
├── compose.yaml
└── README.md

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/marvin1089/showcase-appointment.git
```

### Start the database

```bash
docker compose up -d
```

### Start the backend

```bash
cd backend/appointment-api
mvn spring-boot:run
```

### Start the frontend

```bash
npm install
ng serve
```

The Angular application is available at:

http://localhost:4200

The Spring Boot REST API is available at:

http://localhost:8080

---

## 📚 Documentation

Additional project documentation can be found in the `docs` folder.

- Architecture Overview
- High-Level Project Overview

---

## 👨‍💻 About

This repository is part of my continuous software engineering learning journey.

My professional background is in Business Analysis and Test Management within the financial sector. This project demonstrates practical experience in modern full-stack application development using Angular, Spring Boot, PostgreSQL and Docker.