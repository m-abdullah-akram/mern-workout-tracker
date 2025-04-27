
# 🏋️‍♂️ Workout Tracker (MERN Stack Project)

A full-stack Workout Tracker application built with **MongoDB**, **Express.js**, **React.js**, and **Node.js**.  
Users can create, read, update, and delete (CRUD) workout entries.

---

## 🚀 Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Tools**: Postman, Mongoose

---

## 📦 Project Structure

```
/backend
  |-- models/
  |-- routes/
  |-- controllers/
  |-- server.js
/frontend
  |-- src/
      |-- components/
      |-- pages/
      |-- App.js
  |-- package.json
.gitignore
README.md
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/m-abdullah-akram/mern-workout-tracker.git
cd mern-workout-tracker
```

### 2. Setup Backend (Server)
```bash
cd backend
npm install
npm run dev
```
> Make sure to create your own `.env` file inside `backend/` with:
> ```
> MONGO_URI=your-mongodb-connection-url
> PORT=your-port (e.g., 4000)
> ```

### 3. Setup Frontend (Client)
```bash
cd frontend
npm install
npm run dev
```

---

## 📋 Features
- **Create** new workout logs.
- **View** all workouts.
- **Update** workout details.
- **Delete** a workout entry.
- Fully connected **Frontend** and **Backend**.

---

## 📷 Screenshots
> *(Optional: Add screenshots of your app UI here if you like)*


---

## 🙏 Acknowledgments
Special thanks to **Allah ﷻ** for granting knowledge and ability.  
This project was created for **learning purposes** and to practice **full-stack development**.

---

## ©️ License
This project is **open-source** and available under the [MIT License](LICENSE).