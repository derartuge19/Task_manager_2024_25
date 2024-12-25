# Project Title: Task_manager

## Group Members
- **Blen Nigussie** - ID: UGR/3480/15
- **Derartu Nigatu** - ID:  UGR/5597/15
- **Eden Zewdu** - ID: UGR/9956/15
- **Eyob Fikre** - ID: UGR/9963/15
- **Michael Teshome** - ID: ATR/1408/11


# Task Manager
## Overview
The Task Manager is a web-based application designed to help users efficiently manage their tasks, whether personal or professional. It provides a streamlined platform for creating, updating, and tracking tasks while offering flexibility and ease of use. This application is ideal for individuals who need a simple yet effective tool to organize their day-to-day activities and stay productive.

## Key Features

### Backend Features:
| Feature                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **JWT-Based Authentication** | Secures the application with token-based login.                            |
| **Role Management**         | Differentiates user roles (e.g., Admin, User) for feature access control.   |
| **User Management**         | Allows user registration, role assignment, and profile updates.            |
| **Task Management**         | Full CRUD capabilities for creating, reading, updating, and deleting tasks.|

### Frontend Features:
| Feature                      | Description                                                                |
|------------------------------|----------------------------------------------------------------------------|
| **Bootstrap Integration**    | Provides a responsive and user-friendly interface.                        |
| **Fetch API Integration**    | Handles communication with the REST API using JavaScript's Fetch API.      |
| **Offline Availability**     | Designed to run locally without requiring an internet connection.          |
| **TypeScript Modules**       | Organizes front-end functionality for maintainability and scalability.     |

## Technology Stack
| Component       | Technology         |
|------------------|--------------------|
| **Backend**     | NestJS, TypeScript |
| **Frontend**    | TypeScript, Bootstrap |
| **Authentication** | JSON Web Tokens (JWT) |
| **Database**    | PostgreSQL (Relational Database) |

## REST API Design
The application is organized into modular REST API components:
- **Authentication Module:** Handles user registration, login, and role-based access control.
- **Task Module:** Implements full CRUD functionality for task management.
- **Best Practices Followed:**
  - Appropriate HTTP methods (GET, POST, PUT, DELETE).
  - Consistent status codes and error messages.
  - Modular and reusable code structure.

## Database Justification
- **Relational Database (PostgreSQL):**
  - Provides structured data storage, ensuring data consistency and relationships (e.g., Users and Tasks).
  - Ideal for managing role-based access and task dependencies.


## Benefits
Efficient Task Organization: Users can easily manage and prioritize tasks, improving their workflow and productivity.
Scalable and Flexible: Built with NestJS and MongoDB, the system is designed for future enhancements and scalability.
Simple Interface: The clean, intuitive user interface allows for quick navigation and task management without overwhelming the user.

## Future Enhancements
Mobile Optimization: Enhance the application’s responsiveness, allowing users to manage tasks from their mobile devices.
Task Reminders & Notifications: Implement automatic reminders for due tasks and notifications for overdue ones.
Advanced Reporting: Provide users and admins with detailed task completion reports to track performance over time.

## Conclusion
The Task Manager provides a simple yet powerful platform for managing tasks, improving productivity, and enhancing organization. Whether for personal use or team collaboration, this application offers a comprehensive solution for staying on top of tasks while remaining flexible and scalable for future growth.
