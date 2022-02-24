import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "../styles/StyledHome.scss";

const Home = () => {
  return (
    <div className="cards-container">
      <Card className="card" sx={{ backgroundColor: "#a6adde" }}>
        <CardContent>
          <Typography
            className="card-title"
            gutterBottom
            variant="h5"
            component="div"
            color="black"
            fontSize={30}
          >
            Professional
          </Typography>
          <Typography variant="body2" color="black">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>

      <Card className="card" sx={{ backgroundColor: "#a6adde" }}>
        <CardContent>
          <Typography
            className="card-title"
            gutterBottom
            variant="h5"
            component="div"
            color="black"
            fontSize={30}
          >
            Personal
          </Typography>
          <Typography variant="body2" color="black">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
