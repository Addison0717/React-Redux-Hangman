import * as React from 'react'
import * as gameLogic from '../lib/game'

export default function Hangman(props) {

  {  if ( !gameLogic.wrongGuessLimit(props.word, props.guesses) && !gameLogic.gameFinished(props.word, props.guesses)) {
        return(
          <div>
            <h1>Hangman</h1>
            <h2>You can only Guess 6 times!</h2>
            <h3>Wrong Guess Count { gameLogic.wrongGuessCount(props.word, props.guesses) }</h3>
            <h3> { gameLogic.showGuess(props.word, props.guesses) } is the secret word! </h3>
            <h3> Your Guessed Letters: { props.guesses } </h3>
          </div>
        )
      }  else if (gameLogic.isWinner(props.word, props.guesses) ) {
        return (<h1>You won!!!</h1>)
      } else {
        return (<h2>Game over, you lost :( </h2>)
      }
  }

}
