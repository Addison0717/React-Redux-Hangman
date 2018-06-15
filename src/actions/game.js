import {randomWord} from '../lib/game'

export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'


export function newGame(word, guesses) {
  const rando = randomWord()
  return {
    type: NEW_GAME,
    payload: {
      word: rando,
      guesses: guesses
    }
  }
}

export function makeGuess(guesses) {
  return {
    type: MAKE_GUESS,
    payload: guesses
  }
}
