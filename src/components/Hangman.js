import * as React from 'react'
import * as gameLogic from '../lib/game'


export default function Hangman(props) {


  // console.log(gameLogic)
  // console.log(props)

  console.log(gameLogic.wrongGuessCount(props.word, props.guesses))
  console.log(gameLogic.wrongGuessLimit(props.word, props.guesses))
  console.log(gameLogic.isWinner(props.word, props.guesses))
  console.log(gameLogic.gameFinished(props.word, props.guesses))



  return (

  <div>

    <h1>Hangman</h1>

    <h2>You can only Guess 6 times!</h2>

    <h3>{ gameLogic.wrongGuessCount(props.word, props.guesses) }</h3>

    <h3> { gameLogic.showGuess(props.word, props.guesses) } is the secret word! </h3>

    <h3> Your Guessed Letters: { props.guesses } </h3>

  </div>

)}
