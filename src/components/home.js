import React from 'react';
import axios from 'axios';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getGames = this.getGames.bind(this);
  }

  getGames() {
    axios.get('https://api.rawg.io/api/games?key=c7400ff635084895be4319a6edaf857e&dates=2019-09-01,2019-09-30&platforms=18,1,7')
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.getGames}>Home</button>
      </div>
    );
  }
}

export default Home;
