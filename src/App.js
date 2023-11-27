import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Header from "./component/Header";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
