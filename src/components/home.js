import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GameContext from './GameContext';



export function Home() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [addedGames, setAddedGames] = useState([]); // New

  const handleAddClick = (game) => {
    const rating = prompt(`Rate ${game.name} out of 10?`);
    console.log(`You rated ${game.name} ${rating}/10`);

    const profilegame = { name: game.name, rating: rating, background_image: game.background_image };

    axios.post('http://localhost:5000/api/profile', {
  name: game.name,
  rating: rating,
  background_image: game.background_image
}, {
  headers: {
    'Content-Type': 'application/json'
  }
})



    setAddedGames(addedGames => [...addedGames, profilegame]);
  };

  
  

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
    <GameContext.Provider value={[addedGames, setAddedGames]}>
    <div className='App'>
      <input
        type='text'
        placeholder='Search for a game'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
     
      <GameContext.Provider value={[addedGames, setAddedGames]}> {/* Updated */}
        <Card>
          <Card.Body className='cardbody'>
            {games.map(game => (
              <Card key={game.id}>
                <Card.Title>{game.name}</Card.Title>
                <Card.Img className='gamesbannerimage' src={game.background_image}/>
                <Card.Text>{game.released}</Card.Text>
                <Card.Text>{game.metacritic}</Card.Text>
                <Button variant="danger" style={{ marginLeft: "auto" }} onClick={() => handleAddClick(game)}>Add</Button>
              </Card>
            ))}
          </Card.Body>
        </Card>
      </GameContext.Provider> {/* Updated */}
    </div>
    </GameContext.Provider>
  );
}



export default Home;
