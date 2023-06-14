import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import {Box, Button, CssBaseline} from "@mui/material";

const Home = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        marginTop: "100px",
      }}>
      <Box
        sx={{
          width: "500px",
          height: "500px",
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: '30px'
        }}>
        <Button
          size="large"
          variant="elevated"
          sx={{fontSize: "20px", font: "bold", backgroundColor: "#d0689f"}}
          startIcon={<PersonIcon />}>
          User
        </Button>
        <Button
          size="large"
          variant="elevated"
          sx={{fontSize: "20px", font: "bold", backgroundColor: "#d0689f"}}
          startIcon={<PeopleIcon />}>
          Employee
        </Button>
      </Box>
      <CssBaseline />
    </div>
  );
};

export default Home;
