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
                fontSize={16}
              >
                &#9733; I have an honour Computer Science degree from University
                of Calary and DBA certificate from SAIT. I have background in
                Maths, Stat, and Data Science. I'm highly interested in data
                related fields such as Database Administrator, Machine Learning,
                Data Analyst,...
              </Typography>
            </div>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
                fontSize={16}
              >
                &#9733; I'm passionate about my work and I know how to get my
                job done. I'm honest, detail-oriented, and open to criticism. I
                run toward challenges because I can learn the most from them.
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
                fontSize={16}
              >
                &#9733; Here are some of the most common adjectives my friends
                use to describe me: hillarious, very friendly, and quite
                open-minded. I also like jokes, puns, and especially memes. I
                also love animals. I usually say that "if not friend, why friend
                shaped". Here are some photos of my lovely dog:
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
