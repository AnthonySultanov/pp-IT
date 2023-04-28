import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export function Profile() {
  const { loggedIn } = useContext(AuthContext);
  const [addedGames, setAddedGames] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!loggedIn || !token) {
      // handle error: user is not authenticated
      return;
    }
  
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  
    axios
      .get('http://localhost:5000/api/profile', config)
      .then((response) => {
        setAddedGames(response.data.games);
      })
      .catch((error) => console.error(error));
  }, [loggedIn]);
  

  if (!loggedIn) {
    return <p>You need to be logged in to access this page.</p>;
  }

  return (
    <div className="profile-page">
      <Card>
        <Card.Body className='cardbody'>
          {addedGames && addedGames.length > 0 ? (
            addedGames.map((game, index) => (
              <Card key={index}>
                <Card.Title>{game.name}</Card.Title>
                <Card.Img className='gamesbannerimage' src={game.background_image} />
                <Card.Text>Rating: {game.rating}</Card.Text>
              </Card>
            ))
          ) : (
            <Card.Text>No games added yet.</Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
