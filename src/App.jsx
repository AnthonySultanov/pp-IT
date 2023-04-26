import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Loginpage } from './components/loginpage';
import { SignupPage } from './components/signUp';
import { Profile } from './components/profile';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function AppNavbar() {
  const location = useLocation();

  // Don't render the Navbar component if the current path is "/"
  if (location.pathname === '/') {
    return null;
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">MyGameList</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/loginpage">LogIn</Nav.Link>
          <Nav.Link href="/signIn">SignUp</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/loginpage" element={<Loginpage />} />
            <Route path="/signIn" element={<SignupPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
