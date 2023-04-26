import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import GameContext from './GameContext';

export function Profile() {
  const [addedGames] = useContext(GameContext);

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
