import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

import "../styles/StyledProjects.scss";

const Projects = () => {
  return (
    <div className="cards-container-projects">
      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card
          className="card-projects"
          sx={{
            backgroundColor: "green",
            opacity: "0.8",
            backdropFilter: "blur(20px)",
            border: "2px solid green",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              fontSize={30}
              color="white"
              display="block"
            >
              Spotify API
            </Typography>
            <div className="body-container">
              <Typography
                variant="body1"
                color="white"
                className="body-typography"
                display="block"
                fontSize={16}
              >
                I created a simple server that grab information of a given
                account and then display that information using spotify theme.
              </Typography>
            </div>
            <div className="body-container"></div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card
          className="card-projects"
          sx={{
            backgroundColor: "green",
            opacity: "0.8",
            backdropFilter: "blur(20px)",
            border: "2px solid green",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              fontSize={30}
              color="white"
              display="block"
            >
              Colab Notebook
            </Typography>
            <div className="body-container">
              <Typography
                variant="body1"
                color="white"
                className="body-typography"
                display="block"
                fontSize={16}
              >
                A set of collection notebook exploring topics from basic linear
                algebra to creating almost a hundred of models with different
                scale to solve different problems
              </Typography>
            </div>
            <div className="body-container"></div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card
          className="card-projects"
          sx={{
            backgroundColor: "green",
            opacity: "0.8",
            backdropFilter: "blur(20px)",
            border: "2px solid green",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              fontSize={30}
              color="white"
              display="block"
            >
              React Native chat apps
            </Typography>
            <div className="body-container">
              <Typography
                variant="body1"
                color="white"
                className="body-typography"
                display="block"
                fontSize={16}
              >
                I created an apps that is similar to WhatsApp that allows you to
                char privately or in a group. It also allows you to send images,
                emojis, and other stuff. This is a way for me to learn React
                Native
              </Typography>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card
          className="card-projects"
          sx={{
            backgroundColor: "green",
            opacity: "0.8",
            backdropFilter: "blur(20px)",
            border: "2px solid green",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              fontSize={30}
              color="white"
              display="block"
            >
              This website
            </Typography>
            <div className="body-container">
              <Typography
                variant="body1"
                color="white"
                className="body-typography"
                display="block"
                fontSize={16}
              >
                I made this website using React. I tried to make it as aethetic
                as possible. Then I deployed it using AWS to host my website.
              </Typography>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card
          className="card-projects"
          sx={{
            backgroundColor: "green",
            opacity: "0.8",
            backdropFilter: "blur(20px)",
            border: "2px solid green",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              fontSize={30}
              color="white"
              display="block"
            >
              Travel Agency Expert
            </Typography>
            <div className="body-container">
              <Typography
                variant="body1"
                color="white"
                className="body-typography"
                display="block"
                fontSize={16}
              >
                This is a simple application to store data for a travel agency.
                The main thing to focus on this project is the database. I used
                many technique to ensure that we minimize the damage when
                hardware failure occurs. Also, we want to make sure the database
                is optimized for fast transaction.
              </Typography>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Projects;
