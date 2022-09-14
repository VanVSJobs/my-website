import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

import "../styles/StyledHome.scss";

const Home = () => {
  return (
    <div className="cards-container">
      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card className="card" sx={{ backgroundColor: "#a6adde" }}>
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              color="black"
              fontSize={30}
            >
              Professional
            </Typography>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
                fontSize={12}
              >
                &#9733; lorem ipsum
              </Typography>
            </div>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
                fontSize={12}
              >
                &#9733; lorem ipsum
              </Typography>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
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
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
                fontSize={12}
              >
                &#9733;lorem ipsum
              </Typography>
            </div>
            <div className="image-container">
              <img
                src="https://vans-website.s3.amazonaws.com/1.jpg"
                alt="Error with the link"
                width="100"
                height="100"
              />
              <img
                src="https://vans-website.s3.amazonaws.com/2.jpg"
                alt="Error with the link"
                width="100"
                height="100"
              />
              <img
                src="https://vans-website.s3.amazonaws.com/3.jpg"
                alt="Error with the link"
                width="100"
                height="100"
              />
              <img
                src="https://vans-website.s3.amazonaws.com/4.jpg"
                alt="Error with the link"
                width="100"
                height="100"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Home;
