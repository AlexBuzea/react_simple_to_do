import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CatchingPokemonIcon sx={{ marginRight: 2 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
