import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { FaBeer, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import "../styles/StyledHome.scss";

const Home = () => {
  return (
    <div className="cards-container">
      <motion.div className="card-container" whileHover={{ scale: 1.1 }}>
        <Card className="card" sx={{ backgroundColor: "#a6adde" }}>
          <CardContent>
            <div className="body-container">
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                🧔 : Van Tran
              </Typography>
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                ✉ : wadvan987@gmail.com
              </Typography>
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                📲 : +1 (825)-365-8447
              </Typography>
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                <FaGithub /> :{" "}
                <a href="https://github.com/van31337">/van31337/</a>
              </Typography>
              <Typography
                variant="body1"
                color="black"
                className="body-typography"
              >
                <FaLinkedin /> :{" "}
                <a href="https://www.linkedin.com/in/van-tran-1324b1174/">
                  /van-tran-1324b1174/
                </a>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Home;
