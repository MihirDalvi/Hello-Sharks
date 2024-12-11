import React, { useRef, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";

function ContactUsPage() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k1erzck",
        "template_7rkegrr",
        form.current,
        "slcvyZkPYBAf27Fq_"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("We received your message, thanks!");
          // Clear the form after successful submission
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact">
      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          margin: "auto",
          padding: 3,
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Contact Form
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Full Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Enter your name"
            variant="outlined"
            required
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Email Address"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
            variant="outlined"
            required
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            multiline
            rows={4}
            variant="outlined"
            required
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            padding: "10px",
          }}
        >
          Send
        </Button>
      </Box>
    </section>
  );
}

export default ContactUsPage;
