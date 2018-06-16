import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (

    <div>

      <h1 id="heading">Lets play Hangman!!</h1>

      <h2>Rules</h2>
      <h4>When the game starts, a random word will be chosen for you!</h4>
      <h4>You have 6 chances to guess the word correctly, otherwise you'll lose :/</h4>
      <h4>Click the link below to get started!</h4>

      <Link to={ '/hangman' }>Start Game</Link>

    </div>

  )}
