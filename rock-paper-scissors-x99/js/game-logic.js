// All code should be written in this file.
let playerOneMoveOneType,
  playerOneMoveTwoType,
  playerOneMoveThreeType,
  playerTwoMoveOneType,
  playerTwoMoveTwoType,
  playerTwoMoveThreeType,
  playerOneMoveOneValue,
  playerOneMoveTwoValue,
  playerOneMoveThreeValue,
  playerTwoMoveOneValue,
  playerTwoMoveTwoValue,
  playerTwoMoveThreeValue,
  playerOneCount,
  playerTwoCount;

const validRoundNumber = [1, 2, 3];
const moves = ['rock', 'paper', 'scissors'];

const validMoves = (move) => {
  return move === 'rock' || move === 'paper' || move === 'scissors';
};

const setPlayerMoves = (player, move1, val1, move2, val2, move3, val3) => {
  if (!move1 || !move2 || !move3) return;
  if (!val1 || !val2 || !val3) return;
  if (val1 < 1 || val2 < 1 || val3 < 1) return;
  if (val1 > 99 || val2 > 99 || val3 > 99) return;
  if (val1 + val2 + val3 > 99) return;
  if (!validMoves(move1) || !validMoves(move2) || !validMoves(move3)) {
    return;
  }

  if (player === 'Player One') {
    playerOneMoveOneType = move1;
    playerOneMoveTwoType = move2;
    playerOneMoveThreeType = move3;

    playerOneMoveOneValue = val1;
    playerOneMoveTwoValue = val2;
    playerOneMoveThreeValue = val3;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = move1;
    playerTwoMoveTwoType = move2;
    playerTwoMoveThreeType = move3;

    playerTwoMoveOneValue = val1;
    playerTwoMoveTwoValue = val2;
    playerTwoMoveThreeValue = val3;
  }
};

const getMoveWinner = (
  playerOneMoveType,
  playerOneMoveValue,
  playerTwoMoveType,
  playerTwoMoveValue
) => {
  if (
    !playerOneMoveType ||
    !playerOneMoveValue ||
    !playerTwoMoveType ||
    !playerTwoMoveValue
  ) {
    return null;
  }

  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One';
    } else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  }
  if (playerOneMoveType === 'rock') {
    if (playerTwoMoveType === 'scissors') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else if (playerOneMoveType === 'paper') {
    if (playerTwoMoveType === 'rock') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else {
    if (playerTwoMoveType === 'paper') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
};

const getRoundWinner = (round) => {
  if (validRoundNumber.includes(round) === false) return null;

  if (round === 1) {
    return getMoveWinner(
      playerOneMoveOneType,
      playerOneMoveOneValue,
      playerTwoMoveOneType,
      playerTwoMoveOneValue
    );
  } else if (round === 2) {
    return getMoveWinner(
      playerOneMoveTwoType,
      playerOneMoveTwoValue,
      playerTwoMoveTwoType,
      playerTwoMoveTwoValue
    );
  } else if (round === 3) {
    return getMoveWinner(
      playerOneMoveThreeType,
      playerOneMoveThreeValue,
      playerTwoMoveThreeType,
      playerTwoMoveThreeValue
    );
  }
};

const getGameWinner = () => {
  if (
    !playerOneMoveOneType ||
    !playerOneMoveTwoType ||
    !playerOneMoveThreeType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeValue
  ) {
    return null;
  }

  playerOneCount = 0;
  playerTwoCount = 0;

  const roundOne = getRoundWinner(1);
  const roundTwo = getRoundWinner(2);
  const roundThree = getRoundWinner(3);

  countTotal(roundOne);
  countTotal(roundTwo);
  countTotal(roundThree);

  if (playerOneCount > playerTwoCount) {
    return 'Player One';
  } else if (playerOneCount < playerTwoCount) {
    return 'Player Two';
  } else {
    return 'Tie';
  }
};

const countTotal = (winner) => {
  if (winner === 'Player One') {
    playerOneCount += 1;
  } else if (winner === 'Player Two') {
    playerTwoCount += 1;
  }
};

const setComputerMoves = () => {
  const compMoveOneType = moves[Math.floor(Math.random() * 3)];
  const compMoveTwoType = moves[Math.floor(Math.random() * 3)];
  const compMoveThreeType = moves[Math.floor(Math.random() * 3)];

  const compMoveOneValue = Math.floor(Math.random() * 96) + 1;
  const compMoveTwoValue =
    Math.floor(Math.random() * (97 - compMoveOneValue)) + 1;
  const compMoveThreeValue = 99 - compMoveOneValue - compMoveTwoValue;

  setPlayerMoves(
    'Player Two',
    compMoveOneType,
    compMoveOneValue,
    compMoveTwoType,
    compMoveTwoValue,
    compMoveThreeType,
    compMoveThreeValue
  );
};
