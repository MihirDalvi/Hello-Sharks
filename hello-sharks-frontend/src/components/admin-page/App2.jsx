import { useState } from "react";
import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  AppBar,
  IconButton,
  CssBaseline,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Bar, Line } from "react-chartjs-2";
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

// Register Chart.js Components
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

const drawerWidth = 240;

const ResponsiveDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1e1e2f",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", padding: "10px" }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Dashboard
          </Typography>
          <Typography>Analytics</Typography>
          <Typography>eCommerce</Typography>
          <Typography>CRM</Typography>
          <Typography>Academy</Typography>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#151521",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        {/* Header Section */}
        <Typography variant="h4" gutterBottom>
          Welcome to the Dashboard
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
};

export default ResponsiveDashboard;
