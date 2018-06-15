import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (

    <div>

      <h1>Lets play Hangman!!</h1>

      <Link to={ '/hangman' }>Start Game</Link>

    </div>

  )}
