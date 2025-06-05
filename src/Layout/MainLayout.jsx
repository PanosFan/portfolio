import { Outlet, ScrollRestoration } from "react-router";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "1fr auto",
        minHeight: "100vh",
      }}
    >
      <ScrollRestoration />

      <Container component="main" sx={{ py: 2 }}>
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
}
