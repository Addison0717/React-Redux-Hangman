import * as React from 'react'
import { connect } from 'react-redux'
import Hangman from './Hangman'
import Buttons from './Buttons'

import { newGame } from '../actions/game'
import { makeGuess } from '../actions/game'


class HangmanContainer extends React.PureComponent {

  componentDidMount() {
    // FIRE A NEW GAME WITH THESE PARAMETERS
    this.props.newGame()
  }

  render() {
    // console.log(this.props.game)
    return (

      <div>
        <Hangman word={this.props.game.word} guesses={this.props.game.guesses}/>

        <Buttons makeGuess={this.props.makeGuess} guesses={this.props.game.guesses}/>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}


// export default connect(mapStateToProps)(PhotoPageContainer)
export default connect(mapStateToProps, { newGame, makeGuess })(HangmanContainer)
