import React from "react";
import "./App.css";
import { Bar, Line } from "react-chartjs-2";
import "../video/Vediocall.css";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Toolbar,
  CardActions,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BusinessIcon from "@mui/icons-material/Business";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import VideoCallIcon from "@mui/icons-material/VideoCall";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
// import InfoIcon from "@mui/icons-material/Info";
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
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "profile",
    title: "Profile",
    icon: <AccountBoxIcon />,
  },
  {
    segment: "forstartups",
    title: "For Startups",
    icon: <BusinessIcon />,
  },
  {
    segment: "meeting",
    title: "Meeting",
    icon: <VideoCallIcon />,
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

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
      {pathname === "/profile" && <ForStartupsPage />}
      {pathname === "/forstartups" && <AboutUsPage />}
      {pathname === "/forsharks" && <ForSharksPage />}
      {pathname === "/meeting" && <MeetingPage />}
      {pathname !== "/dashboard" &&
        pathname !== "/aboutus" &&
        pathname !== "/forstartups" &&
        pathname !== "/forsharks" &&
        pathname !== "/meeting" && (
          <Typography>Page content for {pathname}</Typography>
        )}
    </Box>
  );
}

function DashboardContent() {
  // Example Chart Data
  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [50, 70, 40, 90, 60, 80],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineChartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Profit",
        data: [30, 40, 50, 70],
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          background: "linear-gradient(to bottom, #004d40, #00796b)",
          color: "white",
          minHeight: "100vh",
          minWidth: "150vh",
          textAlign: "center",
          padding: "0px 50px",
          flexGrow: 1,
        }}
      >
        <Toolbar />

        {/* Header Section */}
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 3 }}
        >
          Hello, <span style={{ color: "#00e676" }}>STARTUPS!</span>
        </Typography>

        <Typography variant="h5" gutterBottom>
          Welcome to your dashboard. Here are some quick stats and insights.
        </Typography>

        {/* Cards and Charts Section */}
        <Grid container spacing={3}>
          {/* Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#2c2c3b", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Total Sales</Typography>
                <Typography variant="h4">$42.8k</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#6c63ff" }}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#2c2c3b", color: "white" }}>
              <CardContent>
                <Typography variant="h6">New Projects</Typography>
                <Typography variant="h4">862</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#6c63ff" }}>
                  View Projects
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#2c2c3b", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Revenue</Typography>
                <Typography variant="h4">$86.4k</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#6c63ff" }}>
                  View Revenue
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#2c2c3b", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Profit</Typography>
                <Typography variant="h4">$25.6k</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#6c63ff" }}>
                  View Profit
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Charts */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#2c2c3b", color: "white" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Sales Performance
                </Typography>
                <Bar data={barChartData} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#2c2c3b", color: "white" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Profit Overview
                </Typography>
                <Line data={lineChartData} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// function DashboardContent() {
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
//           Hello New Startups
//         </Typography>
//         <Typography variant="h4" gutterBottom>
//           Welcome
//         </Typography>
//       </Box>

//       {/* Description Section */}
//       <Box>
//         <Typography
//           variant="body1"
//           sx={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}
//         >
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
//           voluptas eius sit error dolorem aspernatur, eum adipisci recusandae
//           vel vitae, ad hic repellat commodi molestiae necessitatibus voluptate
//           a nisi debitis!
//         </Typography>
//       </Box>

//       {/* Buttons Section */}
//       {/* <Grid container justifyContent="center" spacing={2} sx={{ mb: 5 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#00acc1",
//               color: "white",
//               fontWeight: "bold",
//               padding: "10px 20px",
//               "&:hover": {
//                 backgroundColor: "#00838f",
//               },
//             }}
//             //onClick={() => { pathname === "/forstartups" && <ForStartupsPage />;}}
//           >
//             For Startups
//           </Button>
//         </Grid>
//         <Grid item>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#00acc1",
//               color: "white",
//               fontWeight: "bold",
//               padding: "10px 20px",
//               "&:hover": {
//                 backgroundColor: "#00838f",
//               },
//             }}
//           >
//             For Sharks
//           </Button>
//         </Grid>
//       </Grid> */}

//       {/* Illustration/Content Section */}
//       <Box>
//         <img
//           src="../src/assets/images/dashboard3.png"
//           alt="Illustration"
//           style={{ maxWidth: "40%", marginBottom: "20px" }}
//         />
//       </Box>
//     </Box>
//   );
// }

function AboutUsPage() {
  //   const navigate = useNavigate();

  //const [activePage, setActivePage] = React.useState("Sharks");
  const [likedCards, setLikedCards] = React.useState([]);
  const [showPopup, setShowPopup] = React.useState(false);
  const [currentCard, setCurrentCard] = React.useState(null);
  const [showLikedOnly, setShowLikedOnly] = React.useState(false);
  const [news, setNews] = React.useState([]);

  const sharkData = [
    {
      id: 0,
      name: "Aman Gupta",
      title: "Co-Founder, boAt",
      image:
        "data:image/jpeg;base64,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",
      bio: "Aman Gupta is a co-founder of boAt, a leading brand in consumer electronics and lifestyle products.",
    },
    {
      id: 1,
      name: "Anupam Mittal",
      title: "Founder, Shaadi.com",
      image:
        "https://m.economictimes.com/thumb/height-450,width-600,imgsize-23260,msid-112932373/from-dealing-with-mental-health-issues-to-getting-immense-fame-from-shark-tank-india-anupam-mittal-makes-some-shocking-revelations-about-his-life.jpg",
      bio: "Anupam Mittal is a renowned entrepreneur and founder of Shaadi.com, India's leading matrimonial platform.",
    },
    {
      id: 2,
      name: "Vineeta Singh",
      title: "CEO, Sugar Cosmetics",
      image:
        "data:image/jpeg;base64,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",
      bio: "Vineeta Singh is the CEO of Sugar Cosmetics, a fast-growing beauty brand in India.",
    },
    {
      id: 3,
      name: "Peyush Bansal",
      title: "Co-Founder, Lenskart",
      image:
        "data:image/jpeg;base64,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",
      bio: "Peyush Bansal is a co-founder of Lenskart, a leading eyewear company revolutionizing the retail industry.",
    },
    {
      id: 4,
      name: "Ratan Tata",
      title: "Chairman, Tata Group",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-87bfhXvJGbbjuAwojietI1Njz53bICMgA&s",
      bio: "Ratan Tata is the former chairman of Tata Group, one of India's largest and most respected conglomerates.",
    },
    {
      id: 5,
      name: "Kunal Shah",
      title: "Founder, CRED",
      image:
        "data:image/jpeg;base64,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",
      bio: "Kunal Shah is the founder of CRED, a platform that rewards users for paying their credit card bills.",
    },
    {
      id: 6,
      name: "Falguni Nayar",
      title: "Founder & CEO, Nykaa",
      image:
        "data:image/jpeg;base64,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",
      bio: "Falguni Nayar is the founder and CEO of Nykaa, a leading Indian e-commerce company specializing in beauty products.",
    },
    {
      id: 7,
      name: "Baba Ramdev",
      title: "Co-Founder, Patanjali",
      image:
        "data:image/jpeg;base64,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",
      bio: "Baba Ramdev is the co-founder of Patanjali, an Ayurvedic company that has gained immense popularity in India.",
    },
    {
      id: 8,
      name: "Ashneer Grover",
      title: "Founder, BharatPe",
      image:
        "data:image/jpeg;base64,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",
      bio: "Ashneer Grover is the founder of BharatPe, a fintech company revolutionizing digital payments in India.",
    },
    {
      id: 9,
      name: "Namita Thapar",
      title: "Executive Director, Emcure Pharmaceuticals",
      image:
        "data:image/jpeg;base64,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",
      bio: "Namita Thapar is the executive director of Emcure Pharmaceuticals, a leading Indian pharmaceutical company.",
    },
  ];

  const handleLikeClick = (cardId) => {
    setCurrentCard(cardId);
    setShowPopup(true);
  };

  const confirmLike = () => {
    setLikedCards((prev) => [...prev, currentCard]);
    setShowPopup(false);
    setCurrentCard(null);
  };

  const cancelLike = () => {
    setShowPopup(false);
    setCurrentCard(null);
  };

  const toggleLikedOnly = (isChecked) => {
    setShowLikedOnly(isChecked);
  };

  const filteredSharkData = showLikedOnly
    ? sharkData.filter((shark) => likedCards.includes(shark.id))
    : sharkData;

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=c9089297ed904d6aae75a3b8cba3cc12"
        );
        const data = await response.json();
        setNews(data.articles.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

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
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 3 }}
      >
        Empowering the <span style={{ color: "#00e676" }}>Change Agents</span>
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", mb: 3 }}
      >
        Helping investors discover startups solving complex problems and
        attracting them as per matching fund portfolios.
      </Typography>

      {/* News Section */}
      <Box
        sx={{
          backgroundColor: "#00251a",
          padding: "10px",
          borderRadius: "10px",
          mb: 3,
        }}
      >
        {news.length > 0 ? (
          <marquee>
            {news.map((article, index) => (
              <span key={index} style={{ marginRight: "20px" }}>
                {article.title} {index < news.length - 1 && "|"}
              </span>
            ))}
          </marquee>
        ) : (
          <p>Loading latest business news...</p>
        )}
      </Box>

      {/* Shark Cards Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Meet the Sharks
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#43a047", mb: 3 }}
          onClick={(e) => toggleLikedOnly(e.target.checked)}
        >
          {showLikedOnly ? "Show All Sharks" : "Show Liked Sharks"}
        </Button>
        <Grid container spacing={3} justifyContent="center">
          {filteredSharkData.map((shark) => (
            <Grid item key={shark.id}>
              <Card sx={{ maxWidth: 300, backgroundColor: "#004d40" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={shark.image || "../src/assets/images/Logo.png"}
                  alt={shark.name}
                />
                <CardContent>
                  <Typography variant="h6">{shark.name}</Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    {shark.title}
                  </Typography>
                  <Typography variant="body2">{shark.bio}</Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: likedCards.includes(shark.id)
                        ? "#00e676"
                        : "#f4511e",
                      mt: 2,
                    }}
                    onClick={() => handleLikeClick(shark.id)}
                  >
                    {likedCards.includes(shark.id) ? "Liked" : "❤ Like"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Popup Modal */}
      <Modal open={showPopup} onClose={cancelLike}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Typography variant="body1">Are you really interested?</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#43a047" }}
            onClick={confirmLike}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#f4511e" }}
            onClick={cancelLike}
          >
            No
          </Button>
        </Box>
      </Modal>
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

function MeetingPage() {
  const roomID = getUrlParams().get("roomID") || randomID(5);
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 1681749580;
    const serverSecret = "6f5fc90a8ccb8a1faf68536ff55224ce";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
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
  {
    id: 2,
    name: "Bharat MUI",
    email: "bharat@mui.com",
    color: "#8B4513", // Brown color
    projects: [
      {
        id: 4,
        title: "Project A",
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

  const [session, setSession] = React.useState(demoSession);
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
        onclick: "/profile",
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
