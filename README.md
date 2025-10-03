# Buyzzar - A Shopping Hub 🛒

Buyzzar is a **MERN-based e-commerce platform** designed as a one-stop shopping hub for **all electronic items**.  
It provides customers with a seamless shopping experience, while **Admin & Vendor panels** make it easy to manage products, orders, and payments.  

---

## 🚀 Features

### Customer Features
- 🛍️ Browse and purchase a wide variety of **electronic products**
- 🔐 Secure **user authentication & authorization**
- 🛒 Cart management & checkout flow
- 📦 Order tracking system
- 💳 Integrated **Razorpay payment gateway**
- 📱 Fully **responsive UI** with **Tailwind CSS**

### Admin Panel
- ➕ Add, update, and delete products
- 📊 Manage orders & users
- 💰 View sales analytics
- 🖼️ Upload product images (via Cloudinary/Base64)

### Vendor Panel
- 🏬 Manage their own product catalog
- 📦 Process orders assigned to vendors
- 💵 Track payments and commissions

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Payment Gateway:** Razorpay  
**Other Tools:** JWT Authentication, REST APIs, Cloudinary  

---

## 📂 Project Structure
inside root folder
/frontend
/backend
---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Buyzzar.git
   cd Buyzzar
   
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

## Create a .env file in the backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Run backend
cd backend
npm start

# Run frontend
cd ../frontend
npm start

## 👨‍💻 Contributors

Praveen Kumar Singh - Full Stack Developer

Abhay Arora - Frontend Developer

Sandeep Kumar - Backend Developer

## 📜 License

This project is licensed under the MIT License.
