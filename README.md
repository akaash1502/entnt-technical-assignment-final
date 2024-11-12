
# EntNT Technical Assignment

Welcome to the **EntNT Technical Assignment** project. This repository contains the source code for a Web Hiring Platform Application. The application enables job posting management, candidate tracking, and job-specific assessment creation.

---

## **Table of Contents**

1. [Overview](#overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Setup Instructions](#setup-instructions)  
5. [Deployment](#deployment)  
6. [Testing & Validation](#testing--validation)  
7. [Test Data](#test-data)  
8. [Contributing](#contributing)  

---

## **Overview**

This project is a web-based platform designed for administrators to manage hiring processes. Administrators can:  
- Post and manage job listings.  
- Create and track assessments for job-specific roles.  
- Manage candidates and their evaluations.  

**Live Demo:** [EntNT Technical Assignment App](https://entnt-technical-assignment-final.vercel.app/)  

---

## **Features**

- **Dynamic Job Management:** Add, delete, and edit jobs dynamically using React Context API.  
- **Assessment Creation:** Create distinct assessments for each job with multiple-choice questions.  
- **Responsive Design:** Fully responsive user interface built with Tailwind CSS.  
- **Persistent Data:** Local storage integration for persisting assessment data.  
- **Error Handling:** Prevents duplicate assessments or adding questions to deleted assessments.  

---

## **Technologies Used**

- **Frontend:** React.js, Context API, Tailwind CSS  
- **Deployment Platform:** Vercel  
- **Version Control:** GitHub  

---

## **Setup Instructions**

Follow these steps to set up and run the project locally:

### **Prerequisites**

Ensure you have the following installed:  
- **Node.js** (v14 or later)  
- **npm** (comes with Node.js) or **yarn**  

### **Steps to Setup**

1. **Clone the Repository**  
   Clone the project using the following command:  
   ```bash
   git clone https://github.com/akaash1502/entnt-technical-assignment-final.git
   cd entnt-technical-assignment-final
   ```

2. **Install the Required Dependencies**  
   Navigate to the project folder and install the dependencies using the following command:  
   ```bash
   npm install
   ```
   This will download all required packages, including React, Tailwind CSS, and any other dependencies specified in the `package.json` file.

3. **Run the Development Server**  
   Start the development server locally:  
   ```bash
   npm start
   ```
   The application will be accessible at:  
   [http://localhost:3000](http://localhost:3000)  

4. **Optional: Build the Project for Production**  
   To create a production-ready build, run:  
   ```bash
   npm run build
   ```
   The production files will be available in the `build` folder.

---

## **Deployment**

The application is deployed on Vercel and can be accessed at the following URL:  
**[Live Application](https://entnt-technical-assignment-final.vercel.app/)**  

### **To Redeploy or Modify**

1. Make changes to the repository locally.  
2. Push the updates to the `main` branch:  
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. Vercel will automatically trigger a new deployment.  

---

## **Testing & Validation**

### **Testing**

1. The application has been thoroughly tested for:  
   - Functional bugs.  
   - Responsiveness on various screen sizes.  
   - Performance optimizations.

2. Test cases include:  
   - Adding, deleting, and editing jobs.  
   - Creating, editing, and removing assessments.  
   - Validation for duplicate or empty data entries.  

### **Validation**

- Ensure smooth navigation and error-free usage before submission.  
- Fix any identified bugs promptly.  

---

## **Test Data**

To demonstrate functionality, the application comes with sample data:  

- **Jobs:**  
  - Software Developer  
  - Product Manager  
  - Data Scientist  

- **Sample Assessment Questions:**  
  - What is React?  
  - Explain the Context API.  
  - Define Machine Learning.  

- **Candidates:**  
  - Candidate details are optional but can be extended for enhanced features.  