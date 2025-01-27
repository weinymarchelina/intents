import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      {/* Make the Toolbar position relative to absolutely center the middle */}
      <Toolbar sx={{ position: "relative" }}>
        {/* Left Section */}
        <Box display="flex" alignItems="center" gap={1}>
          <img
            src="/my-logo.png" // Replace with your logo path
            alt="Logo"
            style={{ width: 30, height: 30 }}
          />
          <Typography variant="h6" color="textPrimary">
            Colorful Notion
          </Typography>
        </Box>

        {/* Middle Section (absolutely centered) */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 3,
            textTransform: "uppercase",
          }}
        >
          <Link href="/" passHref>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/signer" passHref>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Signer
            </Typography>
          </Link>
          <Link href="/docs" passHref>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Docs
            </Typography>
          </Link>
        </Box>

        {/* Right Section */}
        <Box sx={{ ml: "auto" }}>
          <ConnectButton chainStatus="icon" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
