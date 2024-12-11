import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import AppTheme from "../../shared-theme/AppTheme.jsx";
// import { SitemarkIcon } from "./CustomIcons";
import ColorModeSelect from "../../shared-theme/ColorModeSelect.jsx";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  maxHeight: "1000px", // Limit the height of the Card
  overflow: "hidden", // Prevent content from overflowing visually
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function SignUp(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");
  const [companyError, setCompanyError] = React.useState(false);
  const [companyErrorMessage, setCompanyErrorMessage] = React.useState("");
  const [ceoError, setCEOError] = React.useState(false);
  const [ceoErrorMessage, setCEOErrorMessage] = React.useState("");
  const [founderError, setFounderError] = React.useState(false);
  const [founderErrorMessage, setFounderErrorMessage] = React.useState("");
  const [cofounderError, setCofounderError] = React.useState(false);
  const [cofounderErrorMessage, setCofounderErrorMessage] = React.useState("");
  const [descofcompanyError, setDescofcompany] = React.useState(false);
  const [descofcompanyErrorMessage, setDescofcompanyErrorMessage] =
    React.useState("");

  const navigate = useNavigate();

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const name = document.getElementById("name");
    const company = document.getElementById("company");
    const ceo = document.getElementById("ceo");
    const founder = document.getElementById("founder");
    const cofounder = document.getElementById("cofounder");
    const descofcompany = document.getElementById("descofcompany");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    if (!company.value || company.value.length < 1) {
      setCompanyError(true);
      setCompanyErrorMessage("Company name is required.");
      isValid = false;
    } else {
      setCompanyError(false);
      setCompanyErrorMessage("");
    }

    if (!ceo.value || ceo.value.length < 1) {
      setCEOError(true);
      setCEOErrorMessage("CEO name is required.");
      isValid = false;
    } else {
      setCEOError(false);
      setCEOErrorMessage("");
    }

    if (!founder.value || founder.value.length < 1) {
      setFounderError(true);
      setFounderErrorMessage("Founder name is required.");
      isValid = false;
    } else {
      setFounderError(false);
      setFounderErrorMessage("");
    }

    if (!cofounder.value || cofounder.value.length < 1) {
      setCofounderError(true);
      setCofounderErrorMessage("Co-founder name is required.");
      isValid = false;
    } else {
      setCofounderError(false);
      setCofounderErrorMessage("");
    }

    if (!descofcompany.value || descofcompany.value.length < 1) {
      setDescofcompany(true);
      setDescofcompanyErrorMessage("Designated CEO name is required.");
      isValid = false;
    } else {
      setDescofcompany(false);
      setDescofcompanyErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInputs();

    if (isValid) {
      const data = new FormData(event.currentTarget);

      const userDetails = {
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
        company: data.get("company"),
      };

      // Save user to localStorage (hardcoded signup)
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const isUserExists = existingUsers.some(
        (user) => user.email === userDetails.email
      );

      if (isUserExists) {
        alert("User already exists with this email.");
      } else {
        existingUsers.push(userDetails);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        alert("Sign-up successful! You can now sign in.");
        navigate("/SharkDash");
      }
    }
  };

  // const handleSubmit = (event) => {
  //   if (nameError || emailError || passwordError) {
  //     event.preventDefault();
  //     return;
  //   }
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     name: data.get("name"),
  //     lastName: data.get("lastName"),
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <img src="../src/assets/images/Logo4.png" alt="Hello Sharks logo" />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign up for Sharks
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxHeight: "400px", // Limit the height of the form
              overflowY: "auto", // Add a vertical scrollbar for overflow
            }}
          >
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                placeholder="Jon Snow"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="company">Company name</FormLabel>
              <TextField
                autoComplete="company"
                name="company"
                required
                fullWidth
                id="company"
                placeholder="Microsoft"
                error={companyError}
                helperText={companyErrorMessage}
                color={companyError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="ceo">CEO</FormLabel>
              <TextField
                autoComplete="ceo"
                name="ceo"
                required
                fullWidth
                id="ceo"
                placeholder="Sundar Pichai"
                error={ceoError}
                helperText={ceoErrorMessage}
                color={ceoError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="founder">Founder</FormLabel>
              <TextField
                autoComplete="founder"
                name="founder"
                required
                fullWidth
                id="founder"
                placeholder="Bill Gates"
                error={founderError}
                helperText={founderErrorMessage}
                color={founderError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cofounder">Co-Founder</FormLabel>
              <TextField
                autoComplete="cofounder"
                name="cofounder"
                required
                fullWidth
                id="cofounder"
                placeholder="Steve Wozniks"
                error={cofounderError}
                helperText={cofounderErrorMessage}
                color={cofounderError ? "error" : "primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="descofcompany">
                Description of Company
              </FormLabel>
              <TextField
                autoComplete="descofcompany"
                name="descofcompany"
                required
                // multiline
                fullWidth
                id="descofcompany"
                placeholder="Company that creates Computer Software"
                error={descofcompanyError}
                helperText={descofcompanyErrorMessage}
                color={descofcompanyError ? "error" : "primary"}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I accept the terms & conditions."
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign up
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link
                onClick={() => navigate("/SignIn")}
                variant="body2"
                sx={{ alignSelf: "center" }}
              >
                Sign in
              </Link>{" "}
              or{" "}
              <Link
                onClick={() => navigate("/")}
                variant="body2"
                sx={{ alignSelf: "center" }}
              >
                Go Home
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
