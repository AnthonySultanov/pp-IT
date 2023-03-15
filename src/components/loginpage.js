import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


export class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      error: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: this.state.email,
        password: this.state.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        this.setState({ loggedIn: true });
        // Redirect to home page
        return <Navigate to='/' />;
      }
    } catch (error) {
      this.setState({ error: 'Invalid email or password' });
    }
  }

  render() {
    const { email, password, loggedIn, error } = this.state;

    if (loggedIn) {
      return <Navigate to='/' />;
    }

    return (
      <div className="login-page">
        <div className="form">
          <h1>Login</h1>
          {error && <div className="error">{error}</div>}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input type='email' onChange={(e) => this.setState({ email: e.target.value })} value={email} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type='password' onChange={(e) => this.setState({ password: e.target.value })} value={password} required />
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Loginpage;