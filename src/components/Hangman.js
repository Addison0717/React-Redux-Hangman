import * as React from 'react'
import * as gameLogic from '../lib/game'

export default function Hangman(props) {

  {  if ( !gameLogic.wrongGuessLimit(props.word, props.guesses) && !gameLogic.gameFinished(props.word, props.guesses)) {
        return(
          <div>
            <h1>Hangman</h1>
            <br/>
            <hr/>
            <br/>
            <h3>Wrong Guess Count: { gameLogic.wrongGuessCount(props.word, props.guesses) }</h3>
            <h3> { gameLogic.showGuess(props.word, props.guesses) } </h3>
            <h3> Your Guessed Letters: { props.guesses } </h3>
          </div>
        )
      }  else if (gameLogic.isWinner(props.word, props.guesses) ) {
        return (
          <div>
          <h1>You won!!!</h1>
          <h3> { gameLogic.showGuess(props.word, props.guesses) } </h3>
          </div>
        )
      } else {
        return (
          <div>
          <h2>Game over, you lost :( </h2>
          <h3> { props.word } was the answer! </h3>
          </div>
          )
      }
  }

}
