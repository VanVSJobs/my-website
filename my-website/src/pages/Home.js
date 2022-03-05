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
              >
                &#9733; I graduated in 2021 with an Honor Bachelor of Science. I
                majored in Computer Science with a concentration on
                Computational Theory. I also minored in Maths and Data Science
                during my undergraduate time.
              </Typography>
            </div>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                &#9733; I have a strong interest in data science and machine
                learning. I'm familiar with languages such as JavaScript,
                Python, C, C++, R, HTML&CSS, SQL,...
              </Typography>
            </div>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                &#9733; I am familiar with powerful libraries such as OpenCV,
                pandas, TensorFlow, and frameworks such as React, React Native,
                NextJS, ExpressJS,...
              </Typography>
            </div>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                &#9733; I have 2 certificates at the moment which are Data
                Analytics from Google, and UX Design Professional from Google as
                well.
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
              >
                &#9733;I am an animal person. I have a cute dog, and his name is
                Woof Woof. Not only that, but I used to have 2 snakes before
                moving to the current place. My friends are taking care of them
                now, and I can visit them once in a while.
              </Typography>
            </div>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                &#9733; I also enjoy playing video games. If my skills are
                better, I would have probably pursued a career in playing video
                games, but I still play video games with my friends.
              </Typography>
            </div>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                &#9733; I also enjoy reading memes. I'm proudly to be the one
                who suggested Dr. Hamilton to use this meme for his Analysis
                class.
              </Typography>
            </div>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                &#9733; According to my friends, I am friendly, and some of them
                agree that I'm funny without bribing. Below is a picture of my
                dog when he wants to go for a walk.
              </Typography>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Home;
