import * as React from 'react'
import * as gameLogic from '../lib/game'

export default function Hangman(props) {

  // console.log(gameLogic)
  console.log(props)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //     props.makeGuess(this.value)
  // }

  return (

  <div>

    <h1>Hangman</h1>

    <h3> { props.word } is the secret word! </h3>

    <div id="guessButtons" >
      <button onClick={props.makeGuess}>A</button>
      <button>B</button>
      <button>C</button>
      <button>D</button>
      <button>E</button>
      <button>F</button>
      <button>G</button>
      <button>H</button>
      <button>I</button>
      <button>J</button>
      <button>K</button>
      <button>L</button>
      <button>M</button>
      <button>N</button>
      <button>O</button>
      <button>P</button>
      <button>Q</button>
      <button>R</button>
      <button>S</button>
      <button>T</button>
      <button>U</button>
      <button>V</button>
      <button>W</button>
      <button>X</button>
      <button>Y</button>
      <button>Z</button>
    </div>

  </div>

)}
