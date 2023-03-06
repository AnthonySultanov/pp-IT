import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Home} from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">MyShowList</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
      </div>
      </Router>
    );
  }
}

export default App;
