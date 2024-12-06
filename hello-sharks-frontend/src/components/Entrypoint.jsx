import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const USER_TYPES = {
  ADMIN: "admin",
  ENTREPRENEUR: "entrepreneur",
  INVESTOR: "investor",
};

const AuthSystem = () => {
  const [userType, setUserType] = useState("");
  const [authMode, setAuthMode] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    companyName: "",
    investmentInterests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", { userType, authMode, formData });
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
      <Box
        width="100%"
        maxWidth={400}
        bgcolor="#fff"
        boxShadow={3}
        borderRadius={2}
        padding={4}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {authMode === "login" ? "Sign In" : "Sign Up"}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          marginBottom={3}
        >
          Enter your credentials to access your account
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
              {Object.values(USER_TYPES).map((type) => (
                <MenuItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          {authMode === "signup" && (
            <>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              {userType === USER_TYPES.ENTREPRENEUR && (
                <TextField
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              )}
              {userType === USER_TYPES.INVESTOR && (
                <TextField
                  label="Investment Interests"
                  name="investmentInterests"
                  value={formData.investmentInterests}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              )}
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
