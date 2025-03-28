// authenacation using the xl:
// import * as XLSX from "xlsx";

import React, { useState } from "react";
import * as XLSX from "xlsx";

const AuthFromExcel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to validate user credentials from the Excel file
  const validateUser = (users) => {
    const user = users.find(
      (row) => row.Email === email && row.Password.toString() === password
    );

    if (user) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setIsAuthenticated(false);
      setError("Invalid email or password.");
    }
  };

  // Function to fetch and read the Excel file
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/sample_user_data.xlsx");
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming the first sheet contains the user data
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const users = XLSX.utils.sheet_to_json(worksheet);

      // Validate the user input
      validateUser(users);
    } catch (error) {
      setError("Failed to load user data from Excel.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>User Authentication</h2>

      {isAuthenticated ? (
        <p>Welcome, you are authenticated!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AuthFromExcel;
