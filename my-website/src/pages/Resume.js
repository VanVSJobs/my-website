import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

import "../styles/StyledResume.scss";

const Resume = () => {
  return (
    <div className="cards-container-resume">
      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card className="card-resume" sx={{ backgroundColor: "#a6adde" }}>
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h3"
              component="div"
              color="black"
              fontSize={30}
            >
              Cool resume lives here
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Resume;
