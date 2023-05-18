import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import './profile.css';

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
      <div className="game-list">
        {addedGames && addedGames.length > 0 ? (
          addedGames.map((game, index) => (
            <div key={index} className='game-item'>
              <img className='game-item-image' src={game.background_image} alt={game.name} />
              <div className='game-item-details'>
                <div className='game-item-name'>{game.name}</div>
                <div className='game-item-rating'>Rating: {game.rating}</div>
              </div>
            </div>
          ))
        ) : (
          <div className='no-games'>No games added yet.</div>
        )}
      </div>
    </div>
  );
}