import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import { Button, Box, Typography } from "@mui/material";
// import Stack from "@mui/material/Stack";
// import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Avatar from "@mui/material/Avatar";
// import Divider from "@mui/material/Divider";
// import Paper from "@mui/material/Paper";
import {
  Button,
  Modal,
  Box,
  Typography,
  Stack,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid2";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
import InfoIcon from "@mui/icons-material/Info";
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
    segment: "profile",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "sharks",
    title: "Sharks",
    icon: <InfoIcon />,
  },
  {
    segment: "meeting",
    title: "Meeting",
    icon: <CurrencyRupeeIcon />,
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
      {pathname === "/profile" && <DashboardContent />}
      {pathname === "/sharks" && <ForSharksPage />}
      {pathname === "/meeting" && <ForStartupsPage />}
      {pathname === "/forsharks" && <ForSharksPage />}
      {pathname !== "/profile" &&
        pathname !== "/sharks" &&
        pathname !== "/meeting" &&
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
        minWidth: "200vh",
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }} gutterBottom>
          ADMIN PANEL
        </Typography>
        <Typography variant="h4" gutterBottom>
          Welcomes You
        </Typography>
      </Box>

      {/* Description Section */}
      <Box>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          illum voluptatum excepturi accusamus in quod, error aut, repudiandae
          omnis voluptas praesentium dolore. Quaerat consequatur adipisci animi
          earum cum error sequi.
        </Typography>
      </Box>

      {/* Buttons Section */}

      {/* Illustration/Content Section */}
      <Box>
        <img
          src="../src/assets/images/AdminDash.png"
          alt="Illustration"
          style={{ maxWidth: "80%", marginBottom: "20px" }}
        />
      </Box>
    </Box>
  );
}

function ForSharksPage() {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [rows, setRows] = React.useState([]);
  const [activeRows, setActiveRows] = React.useState([]);

  const handleStatusChange = async (status) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/sharks/${selectedRow.id}?status=${status}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          //body: JSON.stringify({ status }),
        }
      );
      console.log("Selected Row ID:", selectedRow.id);
      console.log("Status being sent:", status);

      if (response.ok) {
        const updatedShark = await response.json();
        // Update the local table state
        setRows((prevRows) =>
          prevRows.map((row) =>
            row.id === selectedRow.id
              ? {
                  ...row,
                  status: updatedShark.status ? "Approved" : "Rejected",
                }
              : row
          )
        );
        handleClose();
      } else {
        const errorText = await response.text();
        console.error("Failed to update status:", response.status, errorText);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Fetch data for pending sharks from the API
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/sharks/inactive"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Map data to match table fields
        const formattedData = data.map((item) => ({
          id: item.id,
          sharkName: item.name,
          founderName: item.title,
          gst_number: item.gstNumber,
          status: "Pending",
        }));
        setRows(formattedData);
        console.log(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // Fetch data for pending sharks from the API
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/sharks/active");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const formattedData = data.map((item) => ({
          id: item.id,
          sharkName: item.name,
          founderName: item.title,
          gst_number: item.gstNumber,
          status: "Approved",
        }));
        setActiveRows(formattedData);
        console.log(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  // const handleApprove = () => {
  //   setRows((prevRows) =>
  //     prevRows.map((row) =>
  //       row.id === selectedRow.id ? { ...row, status: "Approved" } : row
  //     )
  //   );
  //   handleClose();
  // };

  // const handleDelete = () => {
  //   setRows((prevRows) => prevRows.filter((row) => row.id !== selectedRow.id));
  //   handleClose();
  // };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #004d40, #00796b)",
        color: "white",
        minHeight: "100vh",
        minWidth: "200vh",
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      {/* Header Section with INACTIVE SECTION OF TABLES */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }} gutterBottom>
          Shark Table
        </Typography>
        <Typography variant="h5" gutterBottom>
          Manage Pending requests for Approval
        </Typography>
      </Box>

      {/* Table Section */}
      <Box
        sx={{
          maxWidth: "80%",
          margin: "0 auto",
          borderRadius: "0px",
          padding: "5px",
          color: "white",
        }}
      >
        <TableContainer component={Paper} sx={{ backgroundColor: "" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Shark Name</TableCell>
                <TableCell>Founder Name</TableCell>
                <TableCell>GST Number</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.sharkName}</TableCell>
                  <TableCell>{row.founderName}</TableCell>
                  <TableCell>{row.gst_number}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpen(row)}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* ACTIVE SECTION OF TABLES */}
      <Box sx={{ mb: 3, mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Manage Approved requests
        </Typography>
      </Box>
      {/* Table Section */}
      <Box
        sx={{
          maxWidth: "80%",
          margin: "0 auto",
          borderRadius: "0px",
          padding: "5px",
          color: "white",
        }}
      >
        <TableContainer component={Paper} sx={{ backgroundColor: "" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Shark Name</TableCell>
                <TableCell>Founder Name</TableCell>
                <TableCell>GST Number</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activeRows.map((activeRows) => (
                <TableRow key={activeRows.id}>
                  <TableCell>{activeRows.sharkName}</TableCell>
                  <TableCell>{activeRows.founderName}</TableCell>
                  <TableCell>{activeRows.gst_number}</TableCell>
                  <TableCell>{activeRows.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpen(activeRows)}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Actions for {selectedRow?.sharkName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            What would you like to do with this shark?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleStatusChange(true)} // Approve shark
            >
              {" "}
              Approve
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleStatusChange(false)} // Reject shark
            >
              {" "}
              Reject
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

// function AboutUsPage() {
//   const [
//     activePage, //setActivePage
//   ] = React.useState("Sharks");
//   const [likedCards, setLikedCards] = React.useState([]);
//   const [showPopup, setShowPopup] = React.useState(false);
//   const [currentCard, setCurrentCard] = React.useState(null);
//   const [showLikedOnly, setShowLikedOnly] = React.useState(false);
//   const [news, setNews] = React.useState([]);

//   const sharkData = [
//     {
//       id: 0,
//       name: "CRED",
//       title: "Fintech Startup",
//       image:
//         "data:image/png;base64,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",
//       bio: "CRED is a fintech startup that rewards users for paying their credit card bills and offers exclusive rewards.",
//     },
//     {
//       id: 1,
//       name: "Nykaa",
//       title: "Beauty & Wellness E-commerce",
//       image:
//         "data:image/png;base64,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",
//       bio: "Nykaa is an e-commerce platform offering a wide range of beauty, wellness, and fashion products across India.",
//     },
//     {
//       id: 2,
//       name: "Razorpay",
//       title: "Payment Gateway",
//       image:
//         "data:image/png;base64,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",
//       bio: "Razorpay is a payment gateway that simplifies online payments for businesses with innovative solutions.",
//     },
//     {
//       id: 3,
//       name: "Zomato",
//       title: "Food Delivery & Restaurant Discovery",
//       image:
//         "data:image/jpeg;base64,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",
//       bio: "Zomato is a popular food delivery and restaurant discovery platform, serving millions of users worldwide.",
//     },
//     {
//       id: 4,
//       name: "Swiggy",
//       title: "Food Delivery",
//       image:
//         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADWCAMAAAAHMIWUAAAApVBMVEX/////hwT/hAD/gwD/gQD8///+fwD8iAD//vr7qF78fwD+fQD8pVj8hQD7p1j8ggD9/PX759H+sGv9uob68N/6kyz78+f6jhb7q2D6s3P55Mz60q/63cD4vIT6zqT5lzH5vYn617f6oEv6wpL78eL5yJr6nEH5t3n6yp/50ar+m0P7oU/93cP99+/7iw/79eX5sWz6mzj5jAD4kB/9n1b4qGL6jSP+elckAAAMn0lEQVR4nO1dCXuivBbWkAQKpYDXvS5YF+xYbTve9v//tAtJWAKKgDAEL+/zfN/TGQqTN8vJydnS6bRo0aJFi/83oLob8C+AOkNrtZ+P3/4QHHr2YmaZdbeqCmxWk4EBIZRAAEOCqr6zP8xHGmo0nYw8lt0LABKWBuvPB5nax+1Iu8wz4Au13avSeLZo9qTCNJ4+sN6z6m7sXUCzJU4d0Sgk9cVq7tj2D9mZkrms9oZ1t7kYjpN8TAlbOFfqbnd+oHcj0zqNA44at2zNF60IUw943axVa52kolRdsrsmrdpF/pUaBZCnDRla1JkXnr8+tPe6WWQDGuN7qXZ1zW7CyCqHQvI3DuyIT7Ykqt2uOhedLDrcIYB5QLtuMulA45JG1YO2r5tOKpz7xVKU7Ezgaby4e7PhofbrZnQVU7Vcql0wEtUedZRLpurKpydBZ/GLVD5ZLKR8QotS5ZIPIZfsUa+Cahc8103sAialKRE8tFndzBKwSt5uQoxEE09oedeJNQ2qaHaKVX7BJOkjkKmDdLE2WWWQe1hhz0SfuyyvwW3d9DjM8g8rWYb9LJoWGIg0idEhvyW4R958y/IiFkkUb/Kf5KQJeTNTJ4EfgQZ2nn9vBV/kzWwTwjjWTDCEWUAPZnM4G1cojla8KmCMAE/k1YwLXRzpVEQ9zMcVC+MJGOWn6nN9zsYVvtZM0cewiDkiH1cmyepHkeWak2tXrpmjD6fIaS4nV02MIzsqslzzcoWLmllSmIUMEnm5zmtmSTEsZOrPyRWIYVC0ClmFc3LtjmpmSTH7F+MqiCB+L2QrzTuHxdASt/9gXKEhRiRQgQNdLq4A4NFWEJNTMcMw4/qSzhVIWB18fdTMMETvHq5b7dLbAABJwpomP62nRyEWKsNd49p5dd5kL14cYowhlCTJMHR5+TKxF7O+iUTi6eGu9UqgfG76fcuy+p9H0zRFDr5c3yOHG4ZFMa4/dbe7CAodX33bWsNQUB8W0a96E8Nijldj5goh5RLqJpQCpaA3EnfP55OcxGiw3L29TNYrayiIthSimF0iFZ4u4W64qvz0KhjdSWVu5i6AuiOOf6NTdNPJCqguBNKeqguVoNDEsDURKGWH5iXIruqmGCJTJMAdAN/izOJ5pQvWBd7UTTFAgWiJnFzFOa1XvmCxQAs2U4THHYACBYcUMyVmBxbDc0XQr3jBChQbUoVKzOFUN8EoCrlgMwMc6uYXhVXpJIbruvlFgfLHXuYAntbNj8O+Skksi3WIHRrVURVruboYVzeJBYsfdnXi6g6xUCBNggCVn4fEIIibOYpibp0MkAQySzBUpidq4hxeA/ypRjqJZJQIUJE5EYpYfqFIdHgG6EKWKKvkFMtyIERDJQOriRHsk0AFSjFYijiDXSin0rnCraBcO6vSFUVDmKSGBMr2AIgcQVL20U4VubJeubMYvNXNJxXbMslqYhlfElgZJNROkryYQgr2FwG8wq2ZuIp3movBXK3nzldvPP7puZg487ltf/U4jMcvowwrWyQ3TnGgDspwVBB+WLMCfd+ax0KlM9+HW74CsKu7heXhFldVcCGcBzfCosChgavVlUOKqShKPMi7l85VFfQwdxmoo/RfbWd8+PMry6fT6Dw4ONuPwJWantYAxnU2PSeUqf0mqxBEFQfgqhXGjonXdK6qgNbDa1jrLs/LI6bR/M5UroLkRWbCNEUtZob8VK66yFHEMaTGKJ5vcsXvDRLCKE3dHd3iCnYNopqeoSTf4mqI5plLRz9lEt8aV/ifulufE+OrAwu+yS9c53oSK2bgNq6XoWKr8SpXkcKFM8K5dkC9wbWJivBVlwc7rF2b5MaweVyvJhUyv8XP5XHFQgVuZYUiX1ESqSX08jlHSNfybaArxmK2Xp2LXBu2tYZ4vrwkYd871J4vPVKbpBxyuFI+RT/1O6vBxSF/birV6x5Z1bh84DOapkVEgL4vc70CLEblooLo53FSgrfmzmAP6xwhXnITtYgosuezNN99c8waMCI5dTf1bqDXbLNY2IiXPEDZgiiaZCS9jkwFlZty69Mt7G/PYmn8ADPYA7pZkUofNcgenI6bdzrAB/I/3sh8wKJlatyFSdou23TdMIa0TEpdsMsK7kZKdqEhciBeIWyv7bJYlJrR5QFdOQTgBnlaM2N4ceN5MLnEcNmsqAuUil4mvpIbzyMFMXFInni0xppIb2IYc/EYvYel2ulMuV1WaqBHLgfsyJIF54c53FxGJJtSaqrrJis2gfrUQPd5TgS7bDP9rDnhkJGFjyyCQ3hXOsNmRWsVhvkLpN2Di+AAffX8YKfzFFjiZj+2aNGiRYsWLVq0aNGiRYsWTYJifVhpthOTszZEDUrKZeuSYk2t4fUvKt4dWLcsGFXcQWPul1jDGnwOPWuDv39HIyOwfW5Uw6eEfmQZyjozdluyCnUYizdEw/W3oWGsqaOnVbIrkLnfkcdY3r0HfBeGIcvy37DwhKWq6l9ZLdeqbsnMOwHwxG8ZDW7Rwz8G4QA0OsKPaKcmYYMjZDph3jPQBvHGKmuD/Xtyt4tln9yGppqOgk+R5K2S81yGeugVhy/s0xZpjn9H9lDvgiX9EZGCn0EJPOqx0qMNsk5cigcAvBPgc8C5anXfcI5s8hr2gxfp/VO43JIF3OWCfugVWpJ2siJLnltKnVJCI64JVoLrNJEKrH1G/rVNIovJr27EEtf+sm+RYZXKvaR7SB0TEJI2Yr8ewjvpfZVYBclVxiznhAxkWF82wXWoUi7Au3Cwy32SfOrEqEr+Yymol0Lvw2C9TbPiS67JRuOd9e2HjbvACGrb0fwbWguZpqfQChik/ElY0ZzN4fBz33RBwLP9/m4v3RcxV/GRxRrA0892sX12/yBFAkgOdFYTUUD89GVXi1yTKexdKfel7SJBzTQoYNAJ6g8T9zGtHRhetvBBuMpBe+l06Kq0z9BM17iIWpbXj226m1gnHPUS0KeSJyDpLbtGyUHWtHyn54NBXJDZQvJZrZjHXPtgkZa+nOr4z4JxRb+USxDDNV1Hv4loUmFYYWLoRPdYFnThCgNEurTk1eq3FnzHo1ZM6nOz3b2WLTHvjr0vMoXDQO/YHN6Qjrt6ySK9Ay5aioDfUfyBZRdFlx40dKQeYoCXK14FIuUGwKAzC1zIeKOQ1YhDiWHxXGnHXd3/ach8Sk1/uicY5hv5vf2d1JJwAk1C5vLAaCern4dgk4Bz2t+R/T3GleYA0zs2FEUxzSO5CtX/fXo/pUF+Ru4j76n7X1gm6JNsBoBWnq/gLvJgG3CJLSPCgMbK6i+0I8j/5SdCOdIlMa5kPYIX+llZ7uoGcDUV3d+NqUCnHMZY13VD14EhBdqaq1DQyUuGtYpAhOE51GTUUB9F/wEBS8mRQ8rRmOAZz/W/hCup3mmGOkOwRdFhP5Ofz8FzKbIBRzLhR6Vqhz4URwuUHRhZi2GorK68Bv3BbXqUa3AbPMl0oPeEmsHLYQENypX+dpgPDJ4irHyhX1087mbi6+MwZBLG3bmbRFjknyuRHJPDdjhJI1wlnyvtMEzmRRghxHH1pT5dCJUADec6ZXsKN/cgnddT1d79P3Bz66IcJqqGqXlaIuC49qkyRhai6j2WklzZbKqotKsyI/RMKpAjKmifnQqAN9Z+ErrEBfTE9GGawUIaryy22/2+x3HtEBWBntNe1/v93jESXFn25aAKpp3ZQKNpjLRYUfSKDFb/g6qErJolf/9AjCuiUlslOyNRxdQoV2QbbEnQ54goLDGuRJGL/V05GD6rXvCV92W600e50v2QLR2TjhlfnXPGn+l9xQP/0NmBZhzXzic7VL3RNY9IV8V47YkO81MBV5nMU7hc79m2okaOUZSeX+Jv4g1K7NIm2hvhOQft6DkH4J292M+fyDcj6a8O09K0s+M+/iGPAZ9wR87sVcTPI5vJeEli8o+rgeyd4AINnFhJYvc/JuwSZpCtI0GJldmLXMyNDr6IAzD4JyccL3LwquQSIXPAF8XglVVPTwwXqKv4x/vbip3p3EUxSiR1RPPMzF2iCAfks57peq1kyzF3UfuPFsu2HkXZ9bG7w1/iyl0yd1zG0nXwMmr7VA4a3xnqmbcp7avjipDtm/1c7T8epL+GUevWWIrnjBFTCZC5t9DipPmDByR8ih9Xpn+w5B8TJe0c14/2GFRYyfZoL3UIjdPTKmF8/jS+Ijw2avz0bMmn0e9vvGgnmjoD3XA/Ke/spE6AOv31t25gDPWBk3w8Xe4Gv3KF6ZXHfv+yGYsfxxRLfuLFzWaT8uvmpt/fPGgCT4sWLVq0aNGiRYsW/xL/A+rPwP1zJrJTAAAAAElFTkSuQmCC",
//       bio: "Swiggy is a food delivery service offering a wide range of restaurants and quick deliveries to users.",
//     },
//     {
//       id: 5,
//       name: "BYJU'S",
//       title: "EdTech",
//       image:
//         "data:image/png;base64,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",
//       bio: "BYJU'S is an educational technology company offering online learning programs for students of all ages.",
//     },
//     {
//       id: 6,
//       name: "Unacademy",
//       title: "EdTech",
//       image:
//         "data:image/jpeg;base64,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",
//       bio: "Unacademy is an online learning platform providing quality educational content and live classes for various exams.",
//     },
//     {
//       id: 7,
//       name: "Urban Company",
//       title: "Home Services",
//       image:
//         "data:image/png;base64,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",
//       bio: "Urban Company offers home services such as beauty, cleaning, and maintenance through trained professionals.",
//     },
//     {
//       id: 8,
//       name: "PhonePe",
//       title: "Digital Payments",
//       image:
//         "data:image/png;base64,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",
//       bio: "PhonePe is a digital payments platform allowing users to make transactions, pay bills, and recharge on the go.",
//     },
//     {
//       id: 9,
//       name: "Ola",
//       title: "Ride-hailing & Mobility",
//       image:
//         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABCFBMVEX///8AAADX3yOUlJRxcXGGhobV3QDx8fGvr6/p6ent7e3l5eX4+Ph5eXmRkZFtbW3R0dFRUVHX19e3t7eBgYGfn586OjqpqakRERHU1NQdHR1jY2MiIiLFxcWbm5vf399XV1cpKSlDQ0MzMzNfX19BQUHAwMDx9Lvf5yQUFBRSUlJ7gADZ4TLk6XKprxxCRQv7/OvJ0CDq7pvd5ExBRABaXgBrcAAsLgDs8Xru8pjb4kSTmQzk6l7g5mbp7oaxuBVTVg+RlhcsLgf299LDyiDx9L6EiRb3+dns8YHw87BbXhTY3YgaHADq6t0UFQPp7pfHy4CepBenqJaUlniChFiWmymboD9uciIehNvyAAAKTElEQVR4nO2bfV/bOBLHrSR2npwH5/n5mWBooECubEsDtKVQ6O5dd/d2797/OznZcpKxNbKdbj8HuZvvH6VNhKyfNZoZjVRNIwiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAji/xuzUm0Wa6lUrdjM9NPmcw/nB1NpdqfMR2uUzD/3qH4Uw2ZXiOrNSrXkIKnXupOW+4FVfu6x/QiqYu4O6u10WktXhsNhzvk4myl1HI3D5x7fX6XqyGCTqqn1C1szbR1062VHZYqxVPq5x/hXaLuiimlt3mUyjTpfiNki0/fX6eiOjqSZ1luIPpdpk6urd+rPPdLvI+9MYNfMpVTyBLWsphVZ87lH+x1U+eg7FbO0kTIplnPed7nKvNg9Wn9R4B6o0di75ZjkQy9pzbWK3oCrM/P9ajVT7VfEwhsO1r4nqWkDVnnmEe+IY5qZdMNTcFDW8vXueGuaR5bed2RWCt56zGtlVn3uQe+CY5uV6to827kitgJnPIZoprdMB1rWmcp9gc/MUV4XQ+9UKyOlm9G5m+mLue1qOS5zT3C0DT1ZtQoWCrcUTGHSPDyaObYnYaPOh5u13FG3+vVQfcI+tYz4W7q901rkHrlZ1IvN/hD1w/OaLqhl4vRWjP/gMh9rpeYO+Xh4HCmQsXFbG7p/6fCXE3e/kW1aoIvjZlYe8ubbVIz+KizWe3BI8y6rZWGBw04MgcyJFlmhVRv1Yj2kPJH6sNqBNsnNV4UYPXK3H1chX3a1tNuxPoynjzPScu7LsLQ4w2lbaCfH/n3KTgodvx/TTvnsHZluHJxVYgt0pOXcn8U5C86FRE3Zi/7dCt33K1s6xnjjRrMxTVQw0oRll2cRdmriEyg4/k6FA7ddKY5AvrxrItInsZH87c2rV68u3/yEfFUQKV4nH+5PIyz/aOupdlCY8xrGKDmYvFletJYFvjk9X769uHj3dnl1/l4WOXczIaY3OyEPyIcL5Kyz+10UrrcHjWiFPLBldPzJD+eL1ep6kTCMxerk5q19K2k0TfdHnmtVvsFxpMLx7gq3dhEdjvlWN4c9ln04txeLxBbjZGX/FmhTcD0a687Vr/IgUiD3cJLCWsSot6HnKKrc0GesiU7hRzsB9bksl+ef/K2G4lkVZdhPBvsdN6zGOPhhPdhYV3TnUQW/G5X881iYxgSe2pI+zmqZ8FtqyXlF/JWnFBl4wDwmGeHe882G/wtzN4U+n58LbcrXUSETU+ByZfA/AhJzwgyrLbz/Emw7ho5vPoZf1XZS6DeMbmhbHtHKSIz4iM7g0x2XuDr3tRxoc+dHhqGptC+DKPlXjOnboWV3UBg0utBSQ5F1srLA1zaij/uawzMjsVqdwqYHmua+xxnq02AuIyfTM/CtvoPCQmC4k7DGU1ZCjPQcFcgl3t0Zxo39BrYdunvFTg317xHDAH52Gl+hnFqGRAw+33V5u3uJT6Ej8eybsXj02elA+JqBhXRfBu2wDBJmO8PYCuVNSkjCwfMNryIB+awSyB2NljAe7Q+gcUMsizpD4hIIQ/iQgb0N4iqcS+NlIbUU/vr7UnPFKhSTeH9vGG/fw+ZZZ6PGaj1EoQVbYYBJtOIqRAQy3M851BlrS60fQhQmEtoice0z07nrTxoT5EhqvGmkcgbbw4NxTIVSCuGirAnobFqVWp+GKTS+XBjLKxgTi27NpmPJy93cNlJlYcDZpmMpRNMTpo4YOisMpMYqTyoU3nwxrq6gNx2JqpQlF93AaFQVOVCVzcZSCFMIODkqI9FZUq78hglMJK417k1fgeY9obAnDwqsMpU/B3W9fByFMFKU4PtR7W50VpfT7tBlmLjSjMSFz9V4lUV5uw1yiRhzGMtKYTqb9nkdRdqos0wwQYiaQ0fhO0zhSOp9p3UYy9ME9xTw33jEKLKMbKUh4ZBzohlXNx9B846ncCb1DhSqlsnmvM7drEcqBHuKjhud4O4TjRh1VpS972mYQOPizDh5vATNLaWVwuwD3+KACscohkLoFcXKhlkTmjf2mdVkQS7tZYhC7dC4WcKkRvcUIrXLyJwGBIt6tEK42VwnidC3YhGDezv4FgQ/JU4MpcBH7dF4SsDmdU8hUmKH2QQ2ibBIlY9WCNWs8wuoGlsK3Nshad7tQinRONMSiTtfuabvHRtjdT3kpUNAVucWesIVwjx9m8PAWNBHfmvK6j1J4Vf7CdsAu6uQG+nFz7/A1kNvn4dVhOD+UF4mcE6S0QrhnmL7MBPcGsEq0zVWQA5Db6/u8UlcanwK/+6LFdz83Hd0gPQe2OMHvuz6e4lSCCMDvAcC97dI2K2ysRwu/vFgfzvEJHIbfTQOf4V+hr83sZrwiOe7tzKFhtz3XQsUikIVgkgx9n0BO5IjBk8dZWfKHm6NwydZonGvXRjX81tfW8t7uXh5PVBrs6rC4WSrgW1sdK0NRjX/s6CvRPYYFkshlahb27i7TwQ0Gk/ak7HoByrfSW+xoQKRzc50MptMgx82g40bhdSGUlXz7ylGgWfAdSbv4TI8ZZYVss821+PzqIZxqH0zFuXfPvhbloXDVBap49S81/VAfO/nmh4092D1GTrZoHrNceiImTqbRGN19uXK2Oh7PDtbGsvf378ONPRihbKiF+PcYqqccBcn0EKXJVtweMQosSla1X9I2HwveH/tClxcnJ09GvbP/zwNHs4URLofUtCLPHs62rgHVKGrHyzblhyWQAIc8EIOfJ0O0IuIn/g0GsubG57CLS/eXRn29R9/vpdaZb1TUrXCqPPDDnZ+CHC6hmkJdj0BmqF8o3DGGuj9J8Ze39q2MFN78flff1xKFupsWdyrG8fIU8ErDjsDhlsSTKHrHcG/p+gjYNoizTF/xbpcgvQ0vj9P2Lb9+c9/P3y8RI6BG16oiLoYrT7H9+XrmMJ04HP8zgCsGMpOr+QcOyj59PXy8vKrPHsuFfF2o0/dK/g0jlR3MTY4WQqMFKqDe3gLSDrp4x005HpUHHSRWiJrXwa5TzMKOmBZYc+bgg2qwmh4xOAzWIi4Foxy5BmH+ojbh/9O1Cgj76dkp+64GZizqIvbcCHIEYMnBbr6NqKStsjJ5PKFktww9F5bppTy467Sovi04Nx3U3ed7m5/TY6YjqHXd5Y498LQXlyGdgyhuKPEqpfU78kNU8eZpmbhkgIz6GWc2N79ReI401Gci5celfTY/YkH4BeJ48c645j6xum1g9uLReih2LpglDaN9+t/68nnbAr62XVgi3f58eUgl04xann3qKN3xMbhd3VeImb4JX2H7lAciFk9dryX/4ENuwawpVWoi+RoUlIfmL100sqNTmuSSokY39MtNtovH+MjJ58oOvpaHa8S0Gpm57U9/5+yuaRU7tuuQ+xsYB+p6PJxBmuNmvsU4CPJ94sgixun6u299J2RZIftciX/v6mNIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIIj/Jv8BS9KqA4idmjoAAAAASUVORK5CYII=",
//       bio: "Ola is a ride-hailing platform that provides taxi services, including electric vehicle rentals, across India.",
//     },
//   ];

//   const handleLikeClick = (cardId) => {
//     setCurrentCard(cardId);
//     setShowPopup(true);
//   };

//   const confirmLike = () => {
//     setLikedCards((prev) => [...prev, currentCard]);
//     setShowPopup(false);
//     setCurrentCard(null);
//   };

//   const cancelLike = () => {
//     setShowPopup(false);
//     setCurrentCard(null);
//   };

//   const toggleLikedOnly = (isChecked) => {
//     setShowLikedOnly(isChecked);
//   };

//   const filteredSharkData = showLikedOnly
//     ? sharkData.filter((shark) => likedCards.includes(shark.id))
//     : sharkData;

//   // Fetch news articles when the component mounts
//   React.useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           `https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=c9089297ed904d6aae75a3b8cba3cc12`
//         );
//         const data = await response.json();
//         setNews(data.articles.slice(0, 3)); // Display top 3 news articles
//       } catch (error) {
//         console.error("Failed to fetch news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="app-container">
//       <div className="main-content">
//         {activePage === "Profile" && (
//           <div className="profile-page">
//             <h1>Profile</h1>
//             <p>This is the Profile page.</p>
//           </div>
//         )}
//         {activePage === "Sharks" && (
//           <div className="sharks-page">
//             <div className="news-bar">
//               {news.length > 0 ? (
//                 <marquee>
//                   {news.map((article, index) => (
//                     <span key={index} className="news-item">
//                       {article.title}
//                       {index < news.length - 1 && " | "}
//                     </span>
//                   ))}
//                 </marquee>
//               ) : (
//                 <p>Loading latest business news...</p>
//               )}
//             </div>

//             <div className="toggle-container">
//               <label className="toggle-label">
//                 <input
//                   type="checkbox"
//                   className="toggle-input"
//                   onChange={(e) => toggleLikedOnly(e.target.checked)}
//                 />
//                 <span className="toggle-slider"></span>
//                 <span className="toggle-text">Interested Startups</span>
//               </label>
//             </div>

//             <div className="shark-cards">
//               {filteredSharkData.map((shark) => (
//                 <div className="card" key={shark.id}>
//                   <img
//                     src={shark.image}
//                     alt={shark.name}
//                     className="shark-image"
//                   />
//                   <h2>{shark.name}</h2>
//                   <h4>{shark.title}</h4>
//                   <p>{shark.bio}</p>
//                   <div className="card-actions">
//                     <button
//                       className={`like-button ${
//                         likedCards.includes(shark.id) ? "liked" : ""
//                       }`}
//                       onClick={() => handleLikeClick(shark.id)}
//                     >
//                       ❤ Like
//                     </button>
//                     <button className="info-button">Let&apos;s Meet</button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {showPopup && (
//               <div className="popup">
//                 <div className="popup-content">
//                   <p>Are You Really Interested?</p>
//                   <button onClick={confirmLike}>Yes</button>
//                   <button onClick={cancelLike}>No</button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//         {activePage === "Meeting" && (
//           <div className="meeting-page">
//             <h1>Meeting</h1>
//             <p>This is the Meeting page.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

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
          FOR MEETINGS
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

  const [pathname, setPathname] = React.useState("/profile");

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
        onclick: "/SharkDash",
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
