import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Home} from './components/home';




class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
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
