function login(username, password) {
  if (username === "admin" && password === "admin123") {
    return {
      success: true,
      message: "Login successful",
    };
  }

  return {
    success: false,
    message: "Invalid credentials",
  };
}

module.exports = { login };
// Authentication logic// Authentication logic
// Authentication logic// Authentication logic// Authentication logic
// Authentication logic// Authentication logic
// Review test
// Review test
// Review test
// Review test