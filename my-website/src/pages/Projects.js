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
        <Card className="card-projects" sx={{ backgroundColor: "#a6adde" }}>
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              color="black"
              fontSize={30}
            >
              Spotify API
            </Typography>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
                fontSize={12}
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
        <Card className="card-projects" sx={{ backgroundColor: "#a6adde" }}>
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              color="black"
              fontSize={30}
            >
              Colab Notebook
            </Typography>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
                fontSize={12}
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
        <Card className="card-projects" sx={{ backgroundColor: "#a6adde" }}>
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              color="black"
              fontSize={30}
            >
              Exhibit C
            </Typography>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card className="card-projects" sx={{ backgroundColor: "#a6adde" }}>
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              color="black"
              fontSize={30}
            >
              Exhibit D
            </Typography>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card className="card-projects" sx={{ backgroundColor: "#a6adde" }}>
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              color="black"
              fontSize={30}
            >
              Exhibit E
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Projects;
