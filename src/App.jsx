import { useState } from "react";
import CSSBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./ToDoList";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <CSSBaseline />
      <Navbar />
      <TodoList />
    </>
  );
}

export default App;
