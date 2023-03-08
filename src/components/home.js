import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';


export function Home(props) {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const params = {
      key: 'c7400ff635084895be4319a6edaf857e',
      search: searchTerm,
      platforms: '18,1,7',
    };

    axios.get('https://api.rawg.io/api/games', { params })
      .then(response => {
        setGames(response.data.results);
      })
      .catch(error => console.error(error));
  }, [searchTerm]);

  return (
    <div className='App'>
       
    
      <input
        type='text'
        placeholder='Search for a game'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Card>
        <Card.Body className='cardbody'>
          {games.map(game => (
            <Card key={game.id}>
              <Card.Title>{game.name}</Card.Title>
              <Card.Img className='gamesbannerimage' src={game.background_image}/>
              {/* <Card.Text>{game.}</Card.Text> */}
              <Card.Text>{game.released}</Card.Text>
              <Card.Text>{game.metacritic}</Card.Text>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
