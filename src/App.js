import React, { useState, useRef, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

import "./App.css";
import data from "./Components/Data/data";
import Product from "./Components/Container/Product";
import Detail from "./Components/Views/Detail";

export let stockContext = React.createContext();

function App() {
  let [products] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  <Product products={products} />
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <Detail products={products} />
            </>
          }
        />
        <Route path="*" element={<div>없는 페이지 입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
