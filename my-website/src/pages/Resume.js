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
        <Card
          className="card-resume"
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
              Cool resume lives here
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Resume;
