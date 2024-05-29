// src/LiveGames.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

const UpcomingGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api-nba-v1.p.rapidapi.com/games', {
          params: {season: '2023'},
          headers: {
            'X-RapidAPI-Key': '2caa27425emshbde360862e6d3f3p1cb082jsn6e526e2b79ca',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        });
        setGames(response.data.response);
        console.log(response)
      } catch (error) {
        console.error('Error fetching live games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <Container>
      <h1 className="my-4">NBA Games</h1>
      <Row>
        {games.map((game) => (
          <Col key={game.id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Header>
                <img
                  src={game.teams.visitors.logo}
                  alt={game.teams.visitors.name}
                  style={{ width: '50px', marginRight: '10px' }}
                />
                {game.teams.visitors.name} vs {game.teams.home.name}
                <img
                  src={game.teams.home.logo}
                  alt={game.teams.home.name}
                  style={{ width: '50px', marginLeft: '10px' }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title>{game.arena.name}</Card.Title>
                <Card.Text>
                  {game.arena.city}, {game.arena.state}, {game.arena.country}
                </Card.Text>
                <Card.Text>
                  <strong>Status:</strong> {game.status.long}
                </Card.Text>
                <Card.Text>
                  <strong>Score:</strong> {game.scores.visitors.points} - {game.scores.home.points}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UpcomingGames;
