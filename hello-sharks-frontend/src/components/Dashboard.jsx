import React from "react";
// import { Send } from "lucide-react";
import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Typography,
  TextField,
  //TextareaAutosize,
} from "@mui/material";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import BusinessIcon from "@mui/icons-material/Business";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import {
  Account,
  AccountPreview,
  AccountPopoverFooter,
  SignOutButton,
} from "@toolpad/core/Account";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Home",
    icon: <DashboardIcon />,
  },
  {
    segment: "aboutus",
    title: "About Us",
    icon: <InfoIcon />,
  },
  {
    segment: "forstartups",
    title: "For Startups",
    icon: <BusinessIcon />,
  },
  {
    segment: "forsharks",
    title: "For Sharks",
    icon: <HandshakeIcon />,
  },
  {
    segment: "foradmins",
    title: "For Admin",
    icon: <AdminPanelSettingsIcon />,
  },
  {
    segment: "contactus",
    title: "Contact Us",
    icon: <ContactsIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {pathname === "/dashboard" && <DashboardContent />}
      {pathname === "/aboutus" && <AboutUsPage />}
      {pathname === "/forstartups" && <ForStartupsPage />}
      {pathname === "/forsharks" && <ForSharksPage />}
      {pathname === "/foradmins" && <ForAdminsPage />}
      {pathname === "/contactus" && <ContactUsPage />}
      {pathname !== "/dashboard" &&
        pathname !== "/aboutus" &&
        pathname !== "/forstartups" &&
        pathname !== "/forsharks" &&
        pathname !== "/foradmins" &&
        pathname !== "/contactus" && (
          <Typography>Page content for {pathname}</Typography>
        )}
    </Box>
  );
}

function DashboardContent() {
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
          Welcome to Hello-Sharks
        </Typography>
        <Typography variant="h4" gutterBottom>
          Sharks and Startups
        </Typography>
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

      {/* Buttons Section */}
      {/* <Grid container justifyContent="center" spacing={2} sx={{ mb: 5 }}>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00acc1",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#00838f",
              },
            }}
            //onClick={() => { pathname === "/forstartups" && <ForStartupsPage />;}}
          >
            For Startups
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00acc1",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#00838f",
              },
            }}
          >
            For Sharks
          </Button>
        </Grid>
      </Grid> */}

      {/* Illustration/Content Section */}
      <Box>
        <img
          src="../src/assets/images/dashboard3.png"
          alt="Illustration"
          style={{ maxWidth: "40%", marginBottom: "20px" }}
        />
      </Box>
    </Box>
  );
}

function AboutUsPage() {
  const navigate = useNavigate();

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
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          gutterBottom
        >
          Empowering the <span style={{ color: "#00e676" }}>Change Agents</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}
          gutterBottom
        >
          Helping investors discover startups solving complex problems and
          attracting them as per matching fund portfolios.
        </Typography>
      </Box>

      {/* Illustration Section */}
      <Box sx={{ mb: 5 }}>
        <img
          src="../src/assets/images/Dashboard.jpg"
          alt="Empowering Startups"
          style={{ maxWidth: "40%", marginBottom: "20px" }}
        />
      </Box>

      {/* Description Section */}
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Startup India is a flagship initiative of the Government of India,
          intended to catalyze startup culture and build a strong and inclusive
          ecosystem for innovation and entrepreneurship in India. Under the
          Startup India initiative, eligible companies can get recognized as
          startups by DPIIT to access a host of tax benefits, easier compliance,
          IPR fast-tracking, and more.
        </Typography>
      </Box>

      {/* Call-to-Action Section */}
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
            onClick={() => navigate("/learn-more")}
          >
            Learn More
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
            onClick={() => navigate("/get-started")}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

function ForStartupsPage() {
  const navigate = useNavigate();
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
            onClick={() => navigate("/AuthSystem")}
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
            onClick={() => navigate("/AuthSystem")}
          >
            Apply Now
          </Button>
        </Grid>
      </Grid>

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

function ForSharksPage() {
  const navigate = useNavigate();
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
          FOR SHARKS
        </Typography>
        <Typography variant="h5" gutterBottom>
          Invest in Ideas. Connect for Investment Opportunity
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
            onClick={() => navigate("/AuthSystem")}
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
            onClick={() => navigate("/AuthSystem")}
          >
            Apply Now
          </Button>
        </Grid>
      </Grid>

      {/* Illustration Section */}
      <Box sx={{ mb: 5 }}>
        <img
          src="../src/assets/images/Sharks.png"
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

function ForAdminsPage() {
  const navigate = useNavigate();

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
          FOR ADMIN
        </Typography>
        <Typography variant="h5" gutterBottom>
          Manage Users, Applications, and Platform Activities
        </Typography>
      </Box>

      {/* Buttons Section */}
      <Grid container justifyContent="center" spacing={2} sx={{ mb: 5 }}>
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
            onClick={() => navigate("/AuthSystem")}
          >
            Login
          </Button>
        </Grid>
      </Grid>
      {/* Illustration Section */}
      <Box sx={{ mb: 5 }}>
        <img
          src="../src/assets/images/Admin.png"
          alt="Admin Illustration"
          style={{ maxWidth: "40%", marginBottom: "20px" }}
        />
      </Box>
      {/* Description Section */}
      <Box>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}
        >
          Welcome to the Admin Dashboard. Here, you can manage user accounts,
          review startup applications, and track platform statistics. Utilize
          this interface to ensure smooth operations and enhance user
          experience.
        </Typography>
      </Box>
    </Box>
  );
}

// const useStyles = () => ({
//   formContainer: {
//     background: "linear-gradient(to bottom, #004d40, #00796b)",
//     color: "white",
//     minHeight: "100vh",
//     textAlign: "center",
//     padding: "50px 20px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   formHeading: {
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     marginBottom: "20px",
//   },
//   form: {
//     maxWidth: "600px",
//     width: "100%",
//     background: "white",
//     borderRadius: "8px",
//     padding: "20px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   inputField: {
//     marginBottom: "16px",
//     width: "100%",
//   },
//   textArea: {
//     width: "100%",
//     marginBottom: "16px",
//     padding: "10px",
//     borderRadius: "4px",
//     border: "1px solid rgba(0, 0, 0, 0.23)",
//     fontSize: "16px",
//     fontFamily: "Arial, sans-serif",
//     resize: "none",
//   },
// });

// function ContactUsPage() {
//   const [email, setEmail] = React.useState("");
//   const [firstName, setFirstName] = React.useState("");
//   const [subject, setSubject] = React.useState("");
//   const [message, setMessage] = React.useState("");
//   const classes = useStyles();

//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log({ email, firstName, subject, message });
//   };

//   return (
//     <Box className={classes.formContainer}>
//       {/* Header Section */}
//       <Typography variant="h4" className={classes.formHeading}>
//         Get in <span style={{ color: "#00e676" }}>Touch</span> With Us
//       </Typography>
//       <Typography
//         variant="h6"
//         style={{
//           fontSize: "1.2rem",
//           maxWidth: "600px",
//           marginBottom: "20px",
//           color: "white",
//         }}
//       >
//         Have questions or need help? Fill out the form below to contact us, and
//         our team will get back to you shortly.
//       </Typography>

//       {/* Contact Form Section */}
//       <Box
//         className={classes.form}
//         component="form"
//         noValidate
//         autoComplete="off"
//         onSubmit={submitForm}
//       >
//         <TextField
//           label="Full Name"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />

//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           required
//         />

//         <TextField
//           label="Subject"
//           variant="outlined"
//           fullWidth
//           className={classes.inputField}
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           required
//         />

//         <TextareaAutosize
//           aria-label="Message"
//           minRows={6}
//           placeholder="Enter a message"
//           className={classes.textArea}
//           spellCheck
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />

//         <Button
//           variant="contained"
//           type="submit"
//           sx={{
//             width: "200px",
//             fontSize: "16px",
//             fontWeight: "bold",
//             backgroundColor: "#43a047",
//             color: "white",
//             "&:hover": {
//               backgroundColor: "#388e3c",
//             },
//           }}
//         >
//           Submit
//         </Button>
//       </Box>

//       {/* Footer Section */}
//       <Box sx={{ marginTop: "20px", color: "white" }}>
//         <Typography variant="body2" style={{ fontSize: "1rem" }}>
//           Alternatively, you can reach us directly at{" "}
//           <a
//             href="mailto:contact@webistaan.com"
//             style={{ color: "#00e676", textDecoration: "none" }}
//           >
//             contact@webistaan.com
//           </a>{" "}
//           or call us at{" "}
//           <a
//             href="tel:+1234567890"
//             style={{ color: "#00e676", textDecoration: "none" }}
//           >
//             +123 456 7890
//           </a>
//           .
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

function ContactUsPage() {
  const form = useRef();
  const [formData, setFormData] = React.useState({
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
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          <span style={{ color: "#00e676" }}>Send us a message!</span>
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          <span style={{ color: "#00e676" }}>Contact Us</span>
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

// function ContactUsPage() {
//   const [formData, setFormData] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const FormInput = ({ ...props }) => (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm font-medium text-gray-700">{}</label>
//       <input
//         {...props}
//         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition duration-200"
//       />
//     </div>
//   );

//   const FormTextArea = ({ ...props }) => (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm font-medium text-gray-700">{}</label>
//       <textarea
//         {...props}
//         rows={4}
//         className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition duration-200 resize-none"
//       />
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-teal-900 to-teal-700 py-16 px-4">
//       <div className="container mx-auto max-w-4xl">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-white mb-4">
//             Get in <span className="text-emerald-400">Touch</span> With Us
//           </h1>
//           <p className="text-gray-100 text-lg max-w-2xl mx-auto">
//             Have questions or need help? Fill out the form below to contact us,
//             and our team will get back to you shortly.
//           </p>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             Contact Form
//           </h2>
//           <div className="grid grid-cols-2 gap-6 mb-6">
//             <FormInput
//               label="First Name"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//             <FormInput
//               label="Last Name"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <FormInput
//               label="Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <FormTextArea
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
//           >
//             <Send size={20} />
//             Submit Message
//           </button>
//         </form>

//         {/* Footer */}
//         <div className="mt-8 text-center">
//           <p className="text-gray-100">
//             Alternatively, you can reach us directly at{" "}
//             <a
//               href="mailto:contact@hellosharks.com"
//               className="text-emerald-400 hover:text-emerald-300 transition-colors"
//             >
//               contact@hellosharks.com
//             </a>{" "}
//             or call us at{" "}
//             <a
//               href="tel:+1234567890"
//               className="text-emerald-400 hover:text-emerald-300 transition-colors"
//             >
//               +123 456 7890
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ContactUsPage() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         background: "linear-gradient(to bottom, #004d40, #00796b)",
//         color: "white",
//         minHeight: "100vh",
//         minWidth: "150vh",
//         textAlign: "center",
//         padding: "50px 20px",
//       }}
//     >
//       {/* Header Section */}
//       <Box sx={{ mb: 5 }}>
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: "bold",
//             textTransform: "uppercase",
//           }}
//           gutterBottom
//         >
//           Get in <span style={{ color: "#00e676" }}>Touch</span> With Us
//         </Typography>
//         <Typography
//           variant="h6"
//           sx={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}
//           gutterBottom
//         >
//           Have questions or need help? Fill out the form below to contact us,
//           and our team will get back to you shortly.
//         </Typography>
//       </Box>

//       {/* Contact Form Section */}
//       <Box
//         component="form"
//         sx={{
//           maxWidth: "600px",
//           margin: "0 auto",
//           background: "background.paper",
//           borderRadius: "8px",
//           padding: "20px",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <Typography
//           variant="h5"
//           sx={{
//             mb: 3,
//             color: "#003366",
//             fontWeight: "bold",
//           }}
//         >
//           Contact Form
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={4} sm={6}>
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="First Name"
//               required
//             />
//           </Grid>
//           <Grid item xs={4} sm={6}>
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Last Name"
//               required
//             />
//           </Grid>
//           <Grid item xs={4} sm={6}>
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Email"
//               type="email"
//               required
//             />
//           </Grid>
//           <Grid item xs={4}>
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Message"
//               multiline
//               rows={4}
//               required
//             />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           variant="contained"
//           sx={{
//             display: "flex",
//             marginTop: "20px",
//             backgroundColor: "#43a047",
//             color: "white",
//             fontWeight: "bold",
//             padding: "10px 25px",
//             "&:hover": {
//               backgroundColor: "#388e3c",
//             },
//           }}
//         >
//           Submit
//         </Button>
//       </Box>

//       {/* Footer Section */}
//       <Box sx={{ mt: 5 }}>
//         <Typography
//           variant="body2"
//           sx={{ fontSize: "1rem", maxWidth: "800px", margin: "0 auto" }}
//         >
//           Alternatively, you can reach us directly at{" "}
//           <a
//             href="mailto:contact@hellosharks.com"
//             style={{ color: "#00e676", textDecoration: "none" }}
//           >
//             contact@hellosharks.com
//           </a>{" "}
//           or call us at{" "}
//           <a
//             href="tel:+1234567890"
//             style={{ color: "#00e676", textDecoration: "none" }}
//           >
//             +123 456 7890
//           </a>
//           .
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// function ForAdminsPage() {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         background: "linear-gradient(to bottom, #004d40, #00796b)",
//         color: "white",
//         minHeight: "100vh",
//         minWidth: "150vh",
//         textAlign: "center",
//         padding: "50px 20px",
//       }}
//     >
//       {/* Header Section */}
//       <Box sx={{ mb: 5 }}>
//         <Typography variant="h3" sx={{ fontWeight: "bold" }} gutterBottom>
//           ADMIN DASHBOARD
//         </Typography>
//         <Typography variant="h5" gutterBottom>
//           Manage Users, Applications, and Platform Activities
//         </Typography>
//       </Box>

//       {/* Buttons Section */}
//       <Grid container justifyContent="center" spacing={2} sx={{ mb: 5 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#3f51b5",
//               color: "white",
//               fontWeight: "bold",
//               padding: "10px 25px",
//               "&:hover": {
//                 backgroundColor: "#303f9f",
//               },
//             }}
//             onClick={() => navigate("/ManageUsers")}
//           >
//             Manage Users
//           </Button>
//         </Grid>
//         <Grid item>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#8e24aa",
//               color: "white",
//               fontWeight: "bold",
//               padding: "10px 25px",
//               "&:hover": {
//                 backgroundColor: "#7b1fa2",
//               },
//             }}
//             onClick={() => navigate("/ReviewApplications")}
//           >
//             Review Applications
//           </Button>
//         </Grid>
//         <Grid item>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#e53935",
//               color: "white",
//               fontWeight: "bold",
//               padding: "10px 25px",
//               "&:hover": {
//                 backgroundColor: "#d32f2f",
//               },
//             }}
//             onClick={() => navigate("/PlatformMetrics")}
//           >
//             View Platform Metrics
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Illustration Section */}
//       <Box sx={{ mb: 5 }}>
//         <img
//           src="../src/assets/images/AdminIllustration.png"
//           alt="Admin Illustration"
//           style={{ maxWidth: "40%", marginBottom: "20px" }}
//         />
//       </Box>

//       {/* Description Section */}
//       <Box>
//         <Typography
//           variant="body1"
//           sx={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}
//         >
//           Welcome to the Admin Dashboard. Here, you can manage user accounts,
//           review startup applications, and track platform statistics. Utilize
//           this interface to ensure smooth operations and enhance user
//           experience.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function AccountSidebarPreview(props) {
  const { handleClick, open, mini } = props;
  return (
    <Stack direction="column" p={0} overflow="hidden">
      <Divider />
      <AccountPreview
        variant={mini ? "condensed" : "expanded"}
        handleClick={handleClick}
        open={open}
      />
    </Stack>
  );
}

AccountSidebarPreview.propTypes = {
  /**
   * The handler used when the preview is expanded
   */
  handleClick: PropTypes.func,
  mini: PropTypes.bool.isRequired,
  /**
   * The state of the Account popover
   * @default false
   */
  open: PropTypes.bool,
};

const accounts = [
  {
    id: 1,
    name: "Mihir Dalvi",
    email: "mihirdalvi@outlook.com",
    image: "https://avatars.githubusercontent.com/u/19550456",
    projects: [
      {
        id: 3,
        title: "Project X",
      },
    ],
  },
];

function SidebarFooterAccountPopover() {
  return (
    <Stack direction="column">
      <Typography variant="body2" mx={2} mt={1}>
        Accounts
      </Typography>
      <MenuList>
        {accounts.map((account) => (
          <MenuItem
            key={account.id}
            component="button"
            sx={{
              justifyContent: "flex-start",
              width: "100%",
              columnGap: 2,
            }}
          >
            <ListItemIcon>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  fontSize: "0.95rem",
                  bgcolor: account.color,
                }}
                src={account.image ?? ""}
                alt={account.name ?? ""}
              >
                {account.name[0]}
              </Avatar>
            </ListItemIcon>
            <ListItemText
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
              }}
              primary={account.name}
              secondary={account.email}
              primaryTypographyProps={{ variant: "body2" }}
              secondaryTypographyProps={{ variant: "caption" }}
            />
          </MenuItem>
        ))}
      </MenuList>
      <Divider />
      <AccountPopoverFooter>
        <SignOutButton />
      </AccountPopoverFooter>
    </Stack>
  );
}

const createPreviewComponent = (mini) => {
  function PreviewComponent(props) {
    return <AccountSidebarPreview {...props} mini={mini} />;
  }
  return PreviewComponent;
};

function SidebarFooterAccount({ mini }) {
  const PreviewComponent = React.useMemo(
    () => createPreviewComponent(mini),
    [mini]
  );
  return (
    <Account
      slots={{
        preview: PreviewComponent,
        popoverContent: SidebarFooterAccountPopover,
      }}
      slotProps={{
        popover: {
          transformOrigin: { horizontal: "left", vertical: "bottom" },
          anchorOrigin: { horizontal: "right", vertical: "bottom" },
          disableAutoFocus: true,
          slotProps: {
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: (theme) =>
                  `drop-shadow(0px 2px 8px ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.32)"})`,
                mt: 1,
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  bottom: 10,
                  left: 0,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translate(-50%, -50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          },
        },
      }}
    />
  );
}

SidebarFooterAccount.propTypes = {
  mini: PropTypes.bool.isRequired,
};

const demoSession = {
  user: {
    name: "Mihir Dalvi",
    email: "mihirdalvi@outlook.com",
    image: "https://avatars.githubusercontent.com/u/19550456",
  },
};

function DashboardLayoutAccountSidebar(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState("/dashboard");

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  const [session, setSession] = React.useState(null);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      authentication={authentication}
      session={session}
      branding={{
        logo: (
          <img src="../src/assets/images/Logo4.png" alt="Hello Sharks logo" />
        ),
        title: "",
        onclick: "/dashboard",
      }}
    >
      <DashboardLayout
        slots={{
          toolbarAccount: () => null,
          //sidebarFooter: SidebarFooterAccount,
        }}
      >
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutAccountSidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutAccountSidebar;
