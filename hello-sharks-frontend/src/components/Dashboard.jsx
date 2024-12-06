import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
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
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
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
    icon: <CurrencyRupeeIcon />,
  },
  {
    segment: "forsharks",
    title: "For Sharks",
    icon: <BorderColorIcon />,
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
      {pathname !== "/dashboard" &&
        pathname !== "/aboutus" &&
        pathname !== "/forstartups" &&
        pathname != "/forsharks" && (
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
          Hello Sharks
        </Typography>
        <Typography variant="h4" gutterBottom>
          Welcome
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
            onClick={() => navigate("/SignUp")}
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
            onClick={() => navigate("/SignIn")}
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
            onClick={() => navigate("/SignUpSharks")}
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
            onClick={() => navigate("/SignInSharks")}
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
    name: "Bharat Kashyap",
    email: "bharatkashyap@outlook.com",
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
    name: "Bharat Kashyap",
    email: "bharatkashyap@outlook.com",
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
          sidebarFooter: SidebarFooterAccount,
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
