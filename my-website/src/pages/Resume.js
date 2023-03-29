import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";
import PDFViewer from "react-pdf-js";
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
          <CardContent></CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Resume;
