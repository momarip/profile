"use client";
import React, { FC } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ProfileForm from "../components/form";

const Profile = () => {
  return (
    <Box
      mt={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <Paper
        elevation={3}
        sx={{
          height: "70%",
          width: "100%",
          maxWidth: 400,
          padding: 3,
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "30%",
            width: "100%",
            backgroundColor: "#1976d2",
            borderRadius: "10px 10px 0 0",
          }}
        ></div>
        <ProfileForm />
      </Paper>
    </Box>
  );
};

export default Profile;
