# Car Wash Management System

## Overview
This is a **MERN Stack** web application designed to streamline car wash operations. Initially built for car wash managers and owners, the system now includes a **detailer interface** where individual detailers can enter customer car details for approval by the manager.

## Features
- **Admin & Manager Access**: Only managers and owners have full system control.
- **Detailer Interface**: Detailers receive unique codes to access a form where they input customer car details.
- **Car Submission & Approval**: Detailers submit car details, and managers approve or reject entries.
- **Real-time Updates**: Managers can see pending approvals and update statuses.

## Tech Stack
- **Frontend**: React (Next.js) + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose ORM)

## Installation & Setup
### Prerequisites
- Node.js & npm
- MongoDB installed & running locally

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/carwash-management.git
   cd carwash-management
   ```

2. **Install dependencies:**
   ```bash
   # Backend
   cd backend
   npm install
   ```
   ```bash
   # Frontend
   cd frontend
   npm install
   ```

3. **Run the backend:**
   ```bash
   npm start
   ```

4. **Run the frontend:**
   ```bash
   npm run dev
   ```


## Future Enhancements
- **Role-based authentication** for better security.
- **Payment integration** for tracking transactions.
- **Reporting dashboard** for analytics and insights.

## Contributors
- **Ariel Joe** - Full Stack Developer

## License
This project is licensed under the MIT License.

