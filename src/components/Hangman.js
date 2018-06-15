import * as React from 'react'
import * as gameLogic from '../lib/game'


export default function Hangman(props) {

  // console.log(gameLogic)
  // console.log(props)

  return (

  <div>

    <h1>Hangman</h1>

    <h3> { props.word } is the secret word! </h3>
    
  </div>

)}
