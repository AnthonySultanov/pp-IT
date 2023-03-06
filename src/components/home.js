import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export function Home(props) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('https://api.rawg.io/api/games?key=c7400ff635084895be4319a6edaf857e&dates=2019-09-01,2019-09-30&platforms=18,1,7')
      .then(response => {
        setGames(response.data.results);
      });
  }, []);
  
  return (
    <div className='App'>
      <Card>
        {/* <Card.Header>{props.results}</Card.Header> */}
        
        <Card.Body className='cardbody'>
          {games.map(game => (
            <Card key={game.id}>
              <Card.Title>{game.name}</Card.Title>
              <Card.Img className='gamesbannerimage' src={game.background_image}/>
              <Card.Text>{game.released}</Card.Text>
              <Card.Text>{game.rating}</Card.Text>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
