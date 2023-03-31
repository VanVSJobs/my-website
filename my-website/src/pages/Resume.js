import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { motion } from "framer-motion";
import "../styles/StyledResume.scss";

import { PDFViewer } from "../components";

const Resume = () => {
  return (
    <div className="cards-container-resume">
      <motion.div className="card-container">
        <Card
          className="card-resume"
          sx={{
            backgroundColor: "green",
            opacity: "1",
            backdropFilter: "blur(20px)",
            border: "2px solid green",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <CardContent>
            <PDFViewer url="https://vans-website.s3.amazonaws.com/Awesome_CV.pdf" />
            ;
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Resume;
