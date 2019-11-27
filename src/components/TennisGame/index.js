import React, { Component } from 'react';
import { Grid, Container, Typography, Box } from '@material-ui/core';
import data from '../../json/players';
import Player from './Player';
import ResetMatch from './ResetMatch';

class ScoreBoard extends Component {
  state = {
    players: [],
    currentPlayerIndex: 0,
    loadingScores: true,
    playerOneScore: 0,
    playerTwoScore: 0,
  };

  componentDidMount = () => {
    this.fetchFakeData();
  };

  // I created fake async fetch here from json file
  fetchFakeData = () => {
    const request = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      });
    }, 100);

    request.then(() => {
      this.setState({
        players: data,
        loadingScores: false
      });
    });
  };

  handleResetBoard = () => {
      this.setState({
        currentPlayerIndex: 0,
        playerOneScore: 0,
        playerTwoScore: 0,
      });
  }

  // Increment button
  winPoints = playerFirst => {
    const { playerOneScore, playerTwoScore, players } = this.state;
    const firstPlayerName = players[0].name;
    if (playerFirst === firstPlayerName) {
      this.setState({
        playerOneScore: playerOneScore + 1,
      });
    } else {
      this.setState({
        playerTwoScore: playerTwoScore + 1,
      });
    }
  };

  // Dicrement button only when Deuce
  loosePoints = playerFirst => {
    const { playerOneScore, playerTwoScore, players } = this.state;
    const firstPlayerName = players[0].name;
    if (playerFirst === firstPlayerName) {
      this.setState({
        playerOneScore: playerOneScore - 1,
        currentPlayerIndex: playerOneScore - 1
      });
    } else {
      this.setState({
        playerTwoScore: playerTwoScore - 1,
        currentPlayerIndex: playerTwoScore - 1
      });
    }
  };

  // Main App logic added here, we consider few options depends on how players acting ( I put logic into switch function, maybe not a greates solution using switch method ... )
  getMatchScore = () => {
    const { playerOneScore, playerTwoScore, players } = this.state;
    const playerNameOne = players[0].name;
    const playerNameTwo = players[1].name;

    let score = '';
    let temporaryScore = 0;
    if (playerOneScore === playerTwoScore) {
      switch (playerOneScore) {
        case 0:
          score = 'Love-Both';
          break;
        case 1:
          score = 'Fifteen-Fifteen';
          break;
        case 2:
          score = 'Thirty-Thirty';
          break;
        default:
          score = 'Deuce';
          break;
      }
    } else if (playerOneScore >= 3 || playerTwoScore >= 3) {
      let resultMinus = playerOneScore - playerTwoScore;
      if (resultMinus === 1) score =  `Adventage ${playerNameOne}`;
      else if (resultMinus === -1) score = `Adventage ${playerNameTwo}`;
      else if (resultMinus >= 2) score = `Win for ${playerNameOne}`;
      else score = `Win for ${playerNameTwo}`;
    } else {
      for (let i = 1; i < 3; i = i + 1) {
        if (i === 1) temporaryScore = playerOneScore;
        else {
          score += ' - ';
          temporaryScore = playerTwoScore;
        }

        // eslint-disable-next-line default-case
        switch (temporaryScore) {
          case 0:
            score = `${score}Love`;
            break;
          case 1:
            score = `${score}Fifteen`;
            break;
          case 2:
            score = `${score}Thirty`;
            break;
          case 3:
            score = `${score}Forty`;
            break;
          default:
            score = null;
            break;
        }
      }
    }
    return score;
  };

  // We return Player component from function and later map method used on function's reference, in the same time we could return Player component from map method
  renderPlayersOnTheBoard = (player, playerIndex) => {
    const { id, name } = player;
    const { currentPlayerIndex, playerOneScore, playerTwoScore } = this.state;
    return (
      <Player
        key={id}
        name={name}
        player={player}
        winPoints={this.winPoints}
        loosePoints={this.loosePoints}
        playerIndex={playerIndex}
        currentPlayerIndex={currentPlayerIndex}
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
        getMatchScore={this.getMatchScore}
      />
    );
  };

  render() {
    const { players, loadingScores } = this.state;
  
    if (loadingScores) return <p>Points are loading...</p>;
    const matchInfo = this.getMatchScore();
    // We are checking here if string contains words Win for, it's only a flag to let us know someone won the game, according to that we can create conditional below
    const playerWins = matchInfo.includes('Win for');
  
    return (
      <>
        <Container style={{ paddingTop: 30, paddingBottom: 30 }} maxWidth='md'>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant='h3'
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  textTransform: 'uppercase'
                }}
              >
                <Box fontWeight='fontWeightBold' m={1} textAlign='center'>
                  {this.getMatchScore()}
                </Box>
              </Typography>
            </Grid>
           {!playerWins ? (
              players.length > 0 ? (
                players.map(this.renderPlayersOnTheBoard)
              ) : (
                <p>Sorry currently no one is playing</p>
              )
           ) : (<ResetMatch handleResetBoard={this.handleResetBoard} />)}
          </Grid>
        </Container>
      </>
    );
  }
}

export default ScoreBoard;
