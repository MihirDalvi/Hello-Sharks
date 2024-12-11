import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Snackbar,
  Avatar,
  Alert,
} from "@mui/material";

const USER_TYPES = {
  ADMIN: "admin",
  STARTUPS: "startups",
  SHARKS: "sharks",
};

const BASE_URL = "http://localhost:8080/api"; // Update this with your SHARK backend URL.
const BASE_URL1 = "http://localhost:8080/startups"; // Update this with your STARTUP backend URL
const ADMIN_URL = "http://localhost:8080/admin"; // ADMIN_URL

const AuthSystem = () => {
  const [userType, setUserType] = useState("");
  const [authMode, setAuthMode] = useState("login");

  const navigate = useNavigate();

  const [startupData, setStartupData] = useState({
    email: "",
    password: "",
    companyName: "",
    founder: "",
    description: "",
    designation: "",
    revenue: "",
  });
  //console.log("Request body:", JSON.stringify(startupData));

  const [sharkData, setSharkData] = useState({
    name: "",
    gmail: "",
    password: "",
    companyName: "",
    title: "",
    bio: "",
    gstNumber: "",
    revenue: "",
  });
  // console.log("Request body:", JSON.stringify(sharkData));

  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });
  //console.log("set admin data:", JSON.stringify(adminData));

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (userType === USER_TYPES.STARTUPS) {
      setStartupData((prevState) => ({ ...prevState, [name]: value }));
    } else if (userType === USER_TYPES.SHARKS) {
      setSharkData((prevState) => ({ ...prevState, [name]: value }));
    } else if (userType === USER_TYPES.ADMIN) {
      setAdminData((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  const validateFields = () => {
    const newErrors = {};

    if (userType === USER_TYPES.STARTUPS || userType === USER_TYPES.SHARKS) {
      const data = userType === USER_TYPES.STARTUPS ? startupData : sharkData;

      if (!data.email && !data.gmail) {
        newErrors.email = "Email is required.";
      } else if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        newErrors.email = "Invalid email format.";
      }

      if (!data.password) {
        newErrors.password = "Password is required.";
      } else if (data.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters.";
      }

      if (authMode === "signup") {
        if (userType === USER_TYPES.STARTUPS) {
          if (!data.companyName)
            newErrors.companyName = "Company name is required.";
          if (!data.founder) newErrors.founder = "Founder name is required.";
        } else if (userType === USER_TYPES.SHARKS) {
          if (!data.name) newErrors.name = "Name is required.";
          if (!/^[0-9]{15}$/.test(data.gstNumber))
            newErrors.gstNumber = "GST number must be 15 digits.";
        }
      }
    } else if (userType === USER_TYPES.ADMIN) {
      if (!adminData.email) {
        newErrors.email = "Email is required.";
      }
      if (!adminData.password) {
        newErrors.password = "Password is required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      setSnackbar({
        open: true,
        message: "Please fix the validation errors.",
        severity: "error",
      });
      return;
    }

    try {
      let response;

      // Determine the appropriate URL and request body based on user type and authentication mode
      if (userType === USER_TYPES.STARTUPS) {
        if (authMode === "signup") {
          response = await fetch(`${BASE_URL1}/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(startupData),
          });
        } else {
          response = await fetch(`${BASE_URL1}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: startupData.email,
              password: startupData.password,
            }),
          });
        }
      } else if (userType === USER_TYPES.SHARKS) {
        if (authMode === "signup") {
          response = await fetch(`${BASE_URL}/sharks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sharkData),
          });
        } else {
          try {
            response = await fetch(`${BASE_URL}/sharks/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                gmail: sharkData.gmail,
                password: sharkData.password,
              }),
            });

            if (!response.ok) {
              // Handle non-200 responses here
              if (response.status === 403) {
                alert("Account not approved yet. Please contact admin.");
              } else {
                alert("Invalid email or password.");
              }
              return; // Exit
            }

            //const data = await response.json(); // Read response body only once
            alert(`Welcome, ${sharkData.gmail}!`);
          } catch (error) {
            console.error("Error during authentication:", error);
          }
        }
      } else if (userType === USER_TYPES.ADMIN) {
        if (authMode === "login") {
          response = await fetch(`${ADMIN_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: adminData.email,
              password: adminData.password,
            }),
          });
        }
      }

      // Handle the server's response
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error.message || "Failed to authenticate.");
      }

      const result = await response.json();
      console.log(
        authMode === "signup" ? "Signup successful:" : "Login successful:",
        result
      );

      alert(
        authMode === "signup" ? "Registration successful!" : "Login successful!"
      );

      // Redirect the user to the appropriate dashboard
      if (userType === USER_TYPES.STARTUPS) {
        navigate("/StartupDash");
      } else if (userType === USER_TYPES.SHARKS) {
        navigate("/SharkDash");
      } else if (userType === USER_TYPES.ADMIN) {
        navigate("/AdminDash");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      alert(error.message);
    }
  };

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f8f9fa"
      padding={2}
    >
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Box
        width="100%"
        maxWidth={600}
        bgcolor="#fff"
        boxShadow={3}
        borderRadius={2}
        padding={4}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar
            sx={{
              bgcolor: "transparent",
              width: 400,
              height: 110,
              overflow: "hidden",
            }}
          >
            <img
              src="../src/assets/images/Logo4.png"
              alt="Hello Sharks logo"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Avatar>
        </Box>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {authMode === "login" ? "Sign In" : "Sign Up"}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          marginBottom={1}
        >
          {authMode === "login"
            ? "Enter your credentials to access your account"
            : "Enter your credentials to create new account"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="user-type-label">Select User Type</InputLabel>
            <Select
              labelId="user-type-label"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              {Object.values(USER_TYPES)
                .filter((type) =>
                  authMode === "login" ? true : type !== USER_TYPES.ADMIN
                )
                .map((type) => (
                  <MenuItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <TextField
            type="email"
            label="Email Address"
            name={userType === USER_TYPES.SHARKS ? "gmail" : "email"}
            value={
              userType === USER_TYPES.STARTUPS
                ? startupData.email
                : userType === USER_TYPES.SHARKS
                  ? sharkData.gmail
                  : adminData.email
            }
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
            required
          />

          <TextField
            type="password"
            label="Password"
            name="password"
            value={
              userType === USER_TYPES.STARTUPS
                ? startupData.password
                : userType === USER_TYPES.SHARKS
                  ? sharkData.password
                  : adminData.password
            }
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.password}
            helperText={errors.password}
          />

          {/* Conditional Fields */}
          {authMode === "signup" && userType === USER_TYPES.STARTUPS && (
            <>
              <TextField
                label="Company Name"
                name="companyName"
                value={startupData.companyName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                error={!!errors.companyName}
                helperText={errors.companyName}
              />
              <TextField
                label="Founder"
                name="founder"
                value={startupData.founder}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                // error={!!errors.founder}
                // helperText={errors.founder}
              />
              <TextField
                label="Description"
                name="description"
                value={startupData.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                // error={!!errors.description}
                // helperText={errors.description}
              />
              <TextField
                label="Designation"
                name="designation"
                value={startupData.designation}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                // error={!!errors.designation}
                // helperText={errors.designation}
              />
              <TextField
                label="Revenue"
                name="revenue"
                value={startupData.revenue}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                // error={!!errors.revenue}
                // helperText={errors.revenue}
              />
            </>
          )}

          {authMode === "signup" && userType === USER_TYPES.SHARKS && (
            <>
              <TextField
                label="Name"
                name="name"
                value={sharkData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                //error={!!errors.name}
                //helperText={errors.name}
              />
              <TextField
                label="Company Name"
                name="companyName"
                value={sharkData.companyName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                error={!!errors.companyName}
                helperText={errors.companyName}
              />
              <TextField
                label="Title"
                name="title"
                value={sharkData.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                // error={!!errors.title}
                // helperText={errors.title}
              />
              <TextField
                label="Bio"
                name="bio"
                value={sharkData.bio}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                // error={!!errors.bio}
                // helperText={errors.bio}
              />
              <TextField
                label="GST Number"
                name="gstNumber"
                value={sharkData.gstNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                error={!!errors.gstNumber}
                helperText={errors.gstNumber}
              />
              <TextField
                label="Revenue"
                name="revenue"
                value={sharkData.revenue}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                // error={!!errors.revenue}
                // helperText={errors.revenue}
              />
            </>
          )}

          <Box textAlign="right" mt={1}>
            <Button
              variant="text"
              onClick={() =>
                setAuthMode(authMode === "login" ? "signup" : "login")
              }
            >
              {authMode === "login"
                ? "Don't have an account? Sign Up"
                : "Already have an account? Sign In"}
            </Button>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {authMode === "login" ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AuthSystem;
