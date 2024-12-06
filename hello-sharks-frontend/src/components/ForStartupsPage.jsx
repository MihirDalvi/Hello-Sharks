import { useState } from "react";
import { Button, Modal, Box, Typography, TextField, Grid } from "@mui/material";

function ForStartupsPage() {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleOpenRegister = () => setOpenRegisterModal(true);
  const handleCloseRegister = () => setOpenRegisterModal(false);

  const handleOpenLogin = () => setOpenLoginModal(true);
  const handleCloseLogin = () => setOpenLoginModal(false);

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #004d40, #00796b)",
        color: "white",
        minHeight: "100vh",
        minWidth: "150vh",
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }} gutterBottom>
          FOR STARTUPS
        </Typography>
        <Typography variant="h5" gutterBottom>
          Empower Your Ideas. Connect with Investors.
        </Typography>
      </Box>

      {/* Buttons Section */}
      <Grid container justifyContent="center" spacing={2} sx={{ mb: 5 }}>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#43a047",
              color: "white",
              fontWeight: "bold",
              padding: "10px 25px",
              "&:hover": {
                backgroundColor: "#388e3c",
              },
            }}
            onClick={handleOpenRegister}
          >
            Register Now
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f4511e",
              color: "white",
              fontWeight: "bold",
              padding: "10px 25px",
              "&:hover": {
                backgroundColor: "#e53935",
              },
            }}
            onClick={handleOpenLogin}
          >
            Apply Now
          </Button>
        </Grid>
      </Grid>

      {/* Modals */}
      {/* Register Modal */}
      <Modal open={openRegisterModal} onClose={handleCloseRegister}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Register
          </Typography>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleCloseRegister}
          >
            Submit
          </Button>
        </Box>
      </Modal>

      {/* Login Modal */}
      <Modal open={openLoginModal} onClose={handleCloseLogin}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Login
          </Typography>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleCloseLogin}
          >
            Login
          </Button>
        </Box>
      </Modal>

      {/* Illustration Section */}
      <Box sx={{ mb: 5 }}>
        <img
          src="../src/assets/images/Startup.png"
          alt="Illustration"
          style={{ maxWidth: "40%", marginBottom: "20px" }}
        />
      </Box>

      {/* Description Section */}
      <Box>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}
        >
          Startup India Investor Connect is a platform that connects startups
          with investors to facilitate investment opportunities through AI-based
          matchmaking. Through this, entrepreneurs can directly reach out to
          multiple investors using one single application and pitch their
          startup idea.
        </Typography>
      </Box>
    </Box>
  );
}

export default ForStartupsPage;
