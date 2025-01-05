

# **Coin Calculator Frontend**

## **Project Introduction**
The Coin Calculator Frontend is a React-based user interface for the Coin Calculator application. It allows users to input a target amount and coin denominations, then sends the data to the backend REST API to calculate the minimum number of coins needed to make up the target amount. The frontend is built with **React** using **Vite** for development and production builds.

---

## **Technologies Used**
- **Framework**: React (with Vite)
- **Styling**: CSS (Inline Styling in this project)
- **Containerization**: Docker

---

## **How to Build and Run the Frontend**

### **Using Docker**

1. **Clone the frontend repository**:
   ```bash
   git clone https://github.com/Automan1218/2025_HouZheyu_coin_frontend.git
   cd coin_frontend
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t coin_frontend:1.0 .
   ```

3. **Run the container**:
   ```bash
   docker run -d -p 80:80 --name coin_frontend coin_frontend:1.0
   ```

4. **Access the frontend application**:
   - Open your browser and navigate to `http://localhost`.
   - If deploying on EC2, use `http://<your-ec2-public-ip>`(Mine is 18.141.140.4).

---

## **Features**

### **User Interface**
1. **Input Fields**:
   - **Target Amount**: Enter the amount of money to calculate for.
   - **Coin Denominations**: Enter the coin values separated by commas (e.g., `0.1, 0.5, 1`).

2. **Submit Button**:
   - Sends the input data to the backend REST API (`/api/min-coins`).

3. **Result Display**:
   - Shows the calculated result, listing the minimum number of coins needed to make up the target amount.
   - Displays error messages if the backend detects invalid input.

---

## **How to Use the Application**

1. **Open the Frontend**:
   - In the browser, navigate to `http://localhost` or the public IP address of the EC2 instance.

2. **Enter Data**:
   - Input a **target amount** (e.g., `123.45`).
   - Input **coin denominations** as a comma-separated list (e.g., `0.1, 0.5, 1`).

3. **Submit**:
   - Click on the "Calculate" button to send the data to the backend.

4. **View Results**:
   - If the input is valid, the calculated coins will be displayed.
   - If the input is invalid, an error message will be displayed.

---

## **Development Instructions**

### **Running Locally (Without Docker)**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Automan1218/2025_HouZheyu_coin_frontend.git
   cd coin_frontend
   ```

2. **Install dependencies**:
   Make sure you have Node.js and npm installed. Run the following command:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Access the development server**:
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---


## **Frontend API Integration**

1. **API Endpoint**:
   - The frontend sends POST requests to the backend REST API:
     ```
     POST http://<your-backend-ip>:8080/api/min-coins
     ```

2. **Example Request**:
   ```json
   {
       "targetAmount": 123.45,
       "value": [0.1, 0.5, 1.0]
   }
   ```

3. **Error Handling**:
   - If the backend detects invalid values (e.g., letters, symbols), the error message from the backend will be displayed on the frontend.

